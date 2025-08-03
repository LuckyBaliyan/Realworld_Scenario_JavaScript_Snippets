document.addEventListener("DOMContentLoaded",()=>{
    const header = document.querySelector('header');
    window.addEventListener('scroll',()=>{
        scrollY>10?header.classList.add('showHeader'):header.classList.remove('showHeader');
    })
})