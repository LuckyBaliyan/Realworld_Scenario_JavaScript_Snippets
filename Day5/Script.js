document.addEventListener("DOMContentLoaded",()=>{
    const input = document.querySelector("input");
    const resetbtn = document.querySelector("button");

    let timeLeft =  3600; // time in sec i.e 1hr

    function updateTimer(){
        const hours = Math.floor(timeLeft/3600);
        const minutes = Math.floor((timeLeft%3600) / 60);
        const seconds = timeLeft % 60;

        input.value = `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds)
            .padStart(2,"0")
        }`;

        if(timeLeft>0){
            timeLeft--;
        }else{
            clearInterval(timerInterval);
        }
    }

    let timerInterval = setInterval(updateTimer,1000);
    updateTimer(); // inital call

    resetbtn.addEventListener("click",()=>{
      clearInterval(timerInterval);
      input.value = "00:00:00";
      timeLeft = 3600;
      timerInterval = setInterval(updateTimer,1000);
      updateTimer();
    })
})