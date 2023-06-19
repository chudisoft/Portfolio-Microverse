var nav_button = document.querySelector(".menubar");
var nav_list = document.querySelector(".nav-items");

nav_button.addEventListener('click', () => {
    nav_list.classList.toggle('show');

});

