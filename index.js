// JSON server auth

const form = document.getElementById('form');

function login(mail , pass){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        email: mail,
        password: pass,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch('http://localhost:3000/login', requestOptions)
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            if (result.hasOwnProperty('accessToken')){
                location.href = '/home.html'
            }
        })
        .catch((error) => console.log(error));
};





form.addEventListener('submit', function (e){
    e.preventDefault();

    const inputEmail = document.querySelector('.email').value;
    const inputPass = document.querySelector('.pass').value;

    login(inputEmail , inputPass);
})





























// Carousel
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button_right");
const prevButton = document.querySelector(".carousel-button_left");
const dotsNavs = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNavs.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide , index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);


const moveToSlide = (track , currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot , targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides , prevButton , nextButton , targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('hidden');
        nextButton.classList.add('hidden');
    } else {
        prevButton.classList.remove('hidden');
        nextButton.classList.remove('hidden');
    }
}

// When I click left, move slides to the left
prevButton.addEventListener('click' , e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNavs.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide (track , currentSlide , prevSlide);

    updateDots(currentDot , prevDot);

    hideShowArrows(slides , prevButton , nextButton , prevIndex);
})

// When I click right, move slides to the right
nextButton.addEventListener('click' , e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNavs.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide (track , currentSlide , nextSlide);

    updateDots(currentDot , nextDot);

    hideShowArrows(slides , prevButton , nextButton , nextIndex);
});

// When I click the nav indicators, move to that slide
dotsNavs.addEventListener('click' , e =>{
    // What indicator was clicked on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNavs.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide (track , currentSlide , targetSlide);

    updateDots(currentDot , targetDot);

    hideShowArrows(slides , prevButton , nextButton , targetIndex);
})