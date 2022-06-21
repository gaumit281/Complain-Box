'use strict'

const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
// const themeToggler = document.querySelector('.theme-toggler');
const preloader = document.getElementById('loading');

menuBtn.addEventListener('click', () => {
    sideMenu.style.visibility = 'visible';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.visibility = 'hidden';
})

//Keyboard Events

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (!sideMenu.classList.contains('hidden')) {
            //  closeModal();
            sideMenu.style.visibility = 'hidden';
        }
    }
})


//DARK LIGHT THEME

// themeToggler.addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme-variables');

//     themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
//     themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
// })


//Preloading Event

function loadingFunction(){
    preloader.style.display = 'none';
}












