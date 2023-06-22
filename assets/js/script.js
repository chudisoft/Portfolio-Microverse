// const body = document.querySelector('body');
const contactForm = document.querySelector('.contact-form');
const navButton = document.querySelector('.menubar');
const navList = document.querySelector('.nav-items');
const navClose = document.querySelector('#nav-close');
const yearLabel = document.querySelector('#year-label');
const client = document.querySelector('#client');
const role = document.querySelector('#role');
const seeProjectBtn1 = document.querySelector('#see-project-btn-1');
const seeProjectBtn2 = document.querySelector('#see-project-btn-2');
const seeProjectBtn3 = document.querySelector('#see-project-btn-3');
const seeProjectBtn4 = document.querySelector('#see-project-btn-4');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const menuitems = Array.from(document.querySelectorAll('.menu-items'));
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
modalClose.addEventListener('click', () => {
    modal.classList.toggle('show');
});
const projects = [
    {
        name: 'Tonic',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        featuredImage: 'assets/images/samples/desktop/Snapshoot-Portfolio1.png',
        tech: ['HTML', 'CSS', 'JavaScript'],
        client: 'CANOPY',
        role: 'Back End Dev',
        year: '2015',
        link: '#',
        source: '#',
    },
    {
        name: 'Multi-Post Stories',
        description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        featuredImage: 'assets/images/samples/desktop/Snapshoot-Portfolio2.png',
        tech: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
        link: '#',
        source: '#',
        client: 'FACEBOOK',
        role: 'Full Stack Dev',
        year: '',
    },
    {
        name: 'Facebook 360',
        description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR',
        featuredImage: 'assets/images/samples/desktop/Snapshoot-Portfolio3.png',
        tech: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
        link: '#',
        source: '#',
        client: 'FACEBOOK',
        role: 'Full Stack Dev',
        year: '2015',
    },
    {
        name: 'Uber Navigation',
        description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
        featuredImage: 'assets/images/samples/desktop/Snapshoot-Portfolio4.png',
        tech: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
        link: '#',
        source: '#',
        client: 'Uber',
        role: 'Lead Developer',
        year: '2018',
    },
];
function ShowModal(index) {
    modal.classList.toggle('show');
    const modalHeader = document.querySelector('#modal-header');
    const workSampleImage = document.querySelector('#work-sample-image');
    const workDescription = document.querySelector('#work-description');
    const techList = document.querySelector('#tech-list');
    const btnSeeLive = document.querySelector('#btn-see-live');
    const btnSeeSource = document.querySelector('#btn-see-source');
    const project = projects[index];
    modalHeader.textContent = project.name;
    workSampleImage.setAttribute('src', project.featuredImage);
    workDescription.textContent = project.description;
    btnSeeLive.setAttribute('href', project.link);
    btnSeeSource.setAttribute('href', project.source);
    techList.innerHTML = '';
    project.tech.forEach((tech) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = tech;
        li.appendChild(span);
        techList.appendChild(li);
    });
    client.textContent = project.client;
    role.textContent = project.role;
    yearLabel.textContent = project.year;
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
const email = document.getElementById('email');
const warning = document.querySelector('.warning');
const userName = document.querySelector('#name');
const message = document.querySelector('#message');
const formDatakey = 'formData';

contactForm.addEventListener('submit', (event) => {
    if (email.value.toLowerCase() !== email.value) {
        event.preventDefault();
        warning.innerText = 'Email must be lower';
        email.value = email.value.toLowerCase();
    }
});

let formObject = {
  userName: '',
  email: '',
  message: '',
};

function SaveFormData() {
  formObject.userName = userName.value;
  formObject.email = email.value;
  formObject.message = message.value;
  localStorage.setItem(formDatakey, JSON.stringify(formObject));
}

email.addEventListener('input', SaveFormData);
userName.addEventListener('input', SaveFormData);
message.addEventListener('input', SaveFormData);

contactForm.addEventListener('reset', () => {
  localStorage.removeItem(formDatakey);
});

window.addEventListener('load', () => {
  const dataStored = localStorage.getItem(formDatakey);
  if (dataStored !== null) {
    formObject = JSON.parse(dataStored);
    email.value = formObject.email;
    userName.value = formObject.userName;
    message.value = formObject.message;
  }
});