export function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (!slides.length) return;

    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;
    let slideInterval;
    let isTransitioning = false;

    function goToSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;

        slides[currentSlide].classList.remove('active');
        if(dots.length) dots[currentSlide].classList.remove('active');

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        if(dots.length) dots[currentSlide].classList.add('active');

        setTimeout(() => {
            isTransitioning = false;
        }, 1000);
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopSlideShow();
            startSlideShow();
        }, { passive: true });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopSlideShow();
            startSlideShow();
        }, { passive: true });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            stopSlideShow();
            startSlideShow();
        }, { passive: true });
    });

    startSlideShow();
}
