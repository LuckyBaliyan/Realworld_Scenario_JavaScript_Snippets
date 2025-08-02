document.addEventListener("DOMContentLoaded",()=>{
    const toggleBtn = document.querySelector(".toggle-theme");
    let isToggled = false;

    toggleBtn.addEventListener("click",()=>{
        if(!isToggled){
            document.body.classList.add("dark");
            toggleBtn.textContent = 'Light';
            isToggled = true;
        }else{
            document.body.classList.remove("dark");
            toggleBtn.textContent = 'Dark';
            isToggled = false;
        }
    })
})