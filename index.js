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