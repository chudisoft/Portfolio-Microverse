let nav_button = document.querySelector(".menubar");
let nav_list = document.querySelector(".nav-items");
let nav_close = document.querySelector("#nav-close");
let menuitems = Array.from(document.querySelectorAll(".menu-items"));

nav_button.addEventListener('click', () => {
    nav_list.classList.toggle('show');
});
nav_close.addEventListener('click', () => {
    nav_list.classList.toggle('show');
});
menuitems.forEach((item)=>{
    item.addEventListener('click', () => {
        nav_list.classList.remove('show');
    });
})
