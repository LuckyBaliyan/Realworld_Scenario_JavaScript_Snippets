document.addEventListener("DOMContentLoaded",()=>{
    const labelofRange = document.querySelector("#showRange span");
    let currlen = 0;
    const initalLength = document.querySelector("input").getAttribute('data-value');
    document.querySelector("input").addEventListener("input",(e)=>{
        currlen = initalLength - e.target.value.length;
        labelofRange.textContent = `${currlen}`;
    })

})

//here we are using data-attribute from html for initial value we take simply 50 insted of it but this way is a scalable way
//also we choose it because e.target.maxlength is getting undefined..