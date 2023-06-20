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

//modal

const yearLabel = document.querySelector('#year-label');
const client = document.querySelector('#client');
const role = document.querySelector('#role');
const seeProjectBtn1 = document.querySelector('#see-project-btn-1');
const seeProjectBtn2 = document.querySelector('#see-project-btn-2');
const seeProjectBtn3 = document.querySelector('#see-project-btn-3');
const seeProjectBtn4 = document.querySelector('#see-project-btn-4');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ('key' in evt) {
        isEscape = (evt.key === 'Escape' || evt.key === 'Esc');
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape && modal.classList.contains('show')) {
        modal.classList.toggle('show');
    }
};

modalClose.addEventListener('click', () => {
    modal.classList.toggle('show');
});
// name, description, featured image, technologies, link to live version, link to source
const pNames = ['Tonic', 'Multi-Post Stories', 'Facebook 360', 'Uber Navigation'];
const pDescription = [
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR',
    'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
];
const pFeaturedImages = [
    'assets/images/samples/desktop/Snapshoot-Portfolio1.png',
    'assets/images/samples/desktop/Snapshoot-Portfolio2.png',
    'assets/images/samples/desktop/Snapshoot-Portfolio3.png',
    'assets/images/samples/desktop/Snapshoot-Portfolio4.png',
];
const pTech = [
    ['HTML', 'CSS', 'JavaScript'],
    ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
];
const others = [
    { client: 'CANOPY', role: 'Back End Dev', year: '2015' },
    { client: 'FACEBOOK', role: 'Full Stack Dev', year: '2015' },
    { client: 'FACEBOOK', role: 'Full Stack Dev', year: '2015' },
    { client: 'Uber', role: 'Lead Developer', year: '2018' },
];
const pLink = ['#', '#', '#', '#'];
const pSource = ['#', '#', '#', '#'];
function ShowModal(index) {
    modal.classList.toggle('show');
    const modalHeader = document.querySelector('#modal-header');
    const workSampleImage = document.querySelector('#work-sample-image');
    const workDescription = document.querySelector('#work-description');
    const techList = document.querySelector('#tech-list');
    const btnSeeLive = document.querySelector('#btn-see-live');
    const btnSeeSource = document.querySelector('#btn-see-source');
    modalHeader.textContent = pNames[index];
    workSampleImage.setAttribute('src', pFeaturedImages[index]);
    workDescription.textContent = pDescription[index];
    btnSeeLive.setAttribute('href', pLink[index]);
    btnSeeSource.setAttribute('href', pSource[index]);
    techList.innerHTML = '';
    pTech[index].forEach((tech) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = tech;
        li.appendChild(span);
        techList.appendChild(li);
    });
    client.textContent = others[index].client;
    role.textContent = others[index].role;
    yearLabel.textContent = others[index].year;
}
seeProjectBtn1.addEventListener('click', () => {
    ShowModal(0);
});
seeProjectBtn2.addEventListener('click', () => {
    ShowModal(1);
});
seeProjectBtn3.addEventListener('click', () => {
    ShowModal(2);
});
seeProjectBtn4.addEventListener('click', () => {
    ShowModal(3);
});