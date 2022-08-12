// DARK / LIGTH MODE

var lightMode = localStorage.getItem('lightMode');
const toggle = document.querySelector('.toggle');
const toggleImg = document.querySelector('.toggle-img')
const body = document.querySelector('.home');
const card = document.querySelector('.card');
const cards = document.querySelector('.cards');


// Check if light mode is enabled
// If it´s enabled, turn it off
// If it´s disabled, turn it on

const enableLightMode = () => {
    // Add the class 'light-mode'
    body.classList.add('lightMode');
    toggleImg.src = '/img/Dark mode off.png';
    card.src = '/img/1Card disable LM.png';
    cards.src = '/img/3Cards active LM.png';
    // Update lightmode in the localStorage
    localStorage.setItem('lightMode' , 'enabled');
};

const disableLightMode = () => {
    // Remove the class 'light-mode'
    body.classList.remove('lightMode');
    toggleImg.src = '/img/Dark mode on.png';
    card.src = '/img/1Card disable.png';
    cards.src = '/img/3Cards active.png';
    // Update lightmode in the localStorage
    localStorage.setItem('lightMode' , null);
};

if (lightMode === 'enabled'){
    enableLightMode();
};


toggle.addEventListener('click' , (e) => {
    lightMode = localStorage.getItem('lightMode');
    if (lightMode !== 'enabled') {
        enableLightMode();
    } else {
        disableLightMode();
    };
});