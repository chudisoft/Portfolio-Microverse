const navButton = document.querySelector('.menubar');
const navList = document.querySelector('.nav-items');
const navClose = document.querySelector('#nav-close');
const menuitems = Array.from(document.querySelectorAll('.menu-items'));

navButton.addEventListener('click', () => {
    navList.classList.toggle('show');
});
navClose.addEventListener('click', () => {
    navList.classList.toggle('show');
});
menuitems.forEach((item) => {
    item.addEventListener('click', () => {
        navList.classList.remove('show');
    });
});
