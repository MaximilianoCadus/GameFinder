// DARK / LIGTH MODE

var lightMode = localStorage.getItem('lightMode');
var toggle = document.querySelector('.toggle');
var toggleImg = document.querySelector('.toggle-img')
var body = document.querySelector('.home');
var bg = document.querySelector('.bg');
var bg1 = document.querySelector('.bg1');
var bg2 = document.querySelector('.bg2');
var bg3 = document.querySelector('.bg3');
var bg4 = document.querySelector('.bg4');
var bg5 = document.querySelector('.bg5');
var logo = document.querySelector('.logo');
var header = document.querySelector('.home-header');
var loginSocial = document.querySelector('.login-social');
var socialContainers = Array.from(loginSocial.children);
var fb = document.querySelector('.fb');
var tw = document.querySelector('.tw');
var go = document.querySelector('.go');
var fbImg = document.querySelector('.fb-img');
var twImg = document.querySelector('.tw-img');
var goImg = document.querySelector('.go-img');
var leftBtn = document.querySelector('.left');
var rightBtn = document.querySelector('.right');

// Check if light mode is enabled
// If it´s enabled, turn it off
// If it´s disabled, turn it on

const enableLightMode = () => {
    // Add the class 'light-mode'
    body.classList.add('lightMode');
    toggleImg.src = '/img/Dark mode off.png';
    bg.src = '/img/HomeBGLM.png';
    bg1.src = '/img/HomeBG1LM.jpg';
    bg2.src = '/img/HomeBG2LM.jpg';
    bg3.src = '/img/HomeBG3LM.jpg';
    bg4.src = '/img/HomeBG4LM.jpg';
    bg5.src = '/img/HomeBG5LM.jpg';
    logo.src = '/img/GAMEFINDERLM.png';
    header.classList.add('home-headerlm');
    for (var i = 0; i < 3 ; i+=1){
        socialContainers[i].classList.add('social-containerlm');
    };
    fb.classList.add('social-namelm');
    tw.classList.add('social-namelm');
    go.classList.add('social-namelm');
    fbImg.src = '/img/Facebook LM.svg';
    twImg.src = '/img/Twitter LM.svg';
    goImg.src = '/img/Google LM.svg';
    leftBtn.src = '/img/Carousel left LM.svg';
    rightBtn.src = '/img/Carousel right LM.svg';
    // Update lightmode in the localStorage
    localStorage.setItem('lightMode' , 'enabled');
};

const disableLightMode = () => {
    // Remove the class 'light-mode'
    body.classList.remove('lightMode');
    toggleImg.src = '/img/Dark mode on.png';
    bg.src = '/img/HomeBG.png';
    bg1.src = '/img/HomeBG1.jpg';
    bg2.src = '/img/HomeBG2.jpg';
    bg3.src = '/img/HomeBG3.jpg';
    bg4.src = '/img/HomeBG4.jpg';
    bg5.src = '/img/HomeBG5.jpg';
    logo.src = '/img/GAMEFINDER.png';
    header.classList.remove('home-headerlm');
    for (var i = 0; i < 3 ; i+=1){
        socialContainers[i].classList.remove('social-containerlm');
    };
    fb.classList.remove('social-namelm');
    tw.classList.remove('social-namelm');
    go.classList.remove('social-namelm');
    fbImg.src = '/img/Facebook.svg';
    twImg.src = '/img/Twitter.svg';
    goImg.src = '/img/Google.svg';
    leftBtn.src = '/img/Carousel left.svg';
    rightBtn.src = '/img/Carousel right.svg';
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