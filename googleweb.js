const menubar = document.querySelector('.menubar');
const navbox = document.querySelector('.navbox');

    menubar.addEventListener("click",()=>{
        console.log("button was clicked.");
        navbox.classList.toggle('hide');
    })