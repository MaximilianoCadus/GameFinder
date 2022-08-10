// CAROUSEL

var track = document.querySelector(".carousel-track");
var slides = Array.from(track.children);
var nextButton = document.querySelector(".carousel-button_right");
var prevButton = document.querySelector(".carousel-button_left");
var dotsNavs = document.querySelector(".carousel-nav");
var dots = Array.from(dotsNavs.children);
var slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide , index) => {

    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

// Move the slide position
const moveToSlide = (track , currentSlide, targetSlide) =>{

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Update the current dot position
const updateDots = (currentDot , targetDot) => {

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};


// Hide arrows if last image is shown
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
    };
};

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
});

// When I click right, move slides to the right
nextButton.addEventListener('click' , e =>{

    var currentSlide = track.querySelector('.current-slide');
    var nextSlide = currentSlide.nextElementSibling;
    var currentDot = dotsNavs.querySelector('.current-slide');
    var nextDot = currentDot.nextElementSibling;
    var nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide (track , currentSlide , nextSlide);

    updateDots(currentDot , nextDot);

    hideShowArrows(slides , prevButton , nextButton , nextIndex);
});

// When I click the nav indicators, move to that slide
dotsNavs.addEventListener('click' , e =>{

    // What indicator was clicked on?
    var targetDot = e.target.closest('button');

    if (!targetDot) return;

    var currentSlide = track.querySelector('.current-slide');
    var currentDot = dotsNavs.querySelector('.current-slide');
    var targetIndex = dots.findIndex(dot => dot === targetDot);
    var targetSlide = slides[targetIndex];

    moveToSlide (track , currentSlide , targetSlide);

    updateDots(currentDot , targetDot);

    hideShowArrows(slides , prevButton , nextButton , targetIndex);
})