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

document.addEventListener('DOMContentLoaded', function () {
    var stackAreas = document.querySelectorAll('.stack-area');

    stackAreas.forEach(function(stackArea) {
        stackArea.addEventListener('click', function() {
            var languageElement = this.querySelector('.languages');
            var img = this.querySelector('.stack-img');
            if (languageElement) {
                languageElement.classList.toggle('hidden');
                if(languageElement.classList.contains('hidden')) {
                    img.src = 'assets/images/icons/arrowright.png';
                } else {
                    img.src = 'assets/images/icons/arrowdown.png';
                }
            }
        });
    });
});

  
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
        name: 'Music Collection',
        description: `
            This is a web application to check a list of music by a music category, 
            grouping the result by artist name and displaying the number of views/plays.

            This project was created as part of the Microverse React redux capstone project. 
            It allows the student to showcase his talent with HTML, CSS, React, and Redux. 
            It also allows the student to showcase what they can do to the future employee.
        `,
        featuredImage: 'assets/images/samples/music-collection.png',
        tech: ['HTML', 'CSS', 'JavaScript'],
        client: 'CANOPY',
        role: 'Back End Dev',
        year: '2015',
        link: 'https://jazzy-marzipan-52623a.netlify.app/',
        source: 'https://github.com/chudisoft/music-collection',
    },
    {
        name: 'Rayzer Business Solution',
        description: `
            At Rayzer Business Solution, I handle the role of a full-stack developer. I
            created and still maintain the company's websites, desktop applications, and
            web servers. I am currently working on the company's mobile application for a
            point of sale using .net MAUI. The application that I created here is being used
            by over 20 clients, with the customer base growing exponentially.
        `,
        featuredImage: 'assets/images/samples/rayzerbusiness App Dashboard.png',
        tech: ['C#', 'Python', 'HTML', 'CSS', 'JavaScript'],
        link: 'https://rayzerbusiness.com/',
        source: '#',
        client: 'Rayzer',
        role: 'Full Stack Dev',
        year: '',
    },
    {
        name: 'Budget Manager',
        description: `
            This Ruby on Rails project is about building a mobile web application where you can manage
            your budget, and have a list of transactions associated with a category so that you can see
            how much money you spent and on what.
            This project was created as part of the Microverse Ruby on Rails capstone project.
            It allows the student to showcase his talent with ruby, rails, and RSpec.
            It also allows the student to showcase what they can do to the future employee.
        `,
        featuredImage: 'assets/images/samples/Budget Manager.png',
        tech: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
        link: 'https://budget-tracker-rv3z.onrender.com/',
        source: 'https://github.com/chudisoft/budget-tracker',
        client: 'Microverse',
        role: 'Full Stack Dev',
        year: '2024',
    },
    {
        name: 'Bike Reservation',
        description: `
            Bike Reserves is an app for booking motorcycles. You can sign up and add your own motorcycles to the app.
            Once you're signed up, you can reserve motorcycles for specific dates and cities.
            This app is made using React and Rails, making it easy to use.
            It's a handy tool for people who want to book motorcycles.
        `,
        featuredImage: 'assets/images/samples/Bike Reserves.png',
        tech: ['Ruby on rails', 'HTML', 'CSS', 'JavaScript', 'React'],
        link: '#',
        source: 'https://github.com/chudisoft/Book-an-Appointment',
        client: 'Microverse',
        role: 'Backend Developer',
        year: '2024',
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