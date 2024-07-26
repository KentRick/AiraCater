


function showSlide(slideNumber) {
    const slides = document.querySelectorAll('.slides-div');
    const slider = document.querySelector('.image-slider');

    slides.forEach(slide => slide.classList.remove('active'));

    const selectedSlide = document.querySelector(`#slide-${slideNumber}`);
    selectedSlide.classList.add('active');

    if (slideNumber === 1) {
        slider.style.left = '20%';
    } else if (slideNumber === 2) {
        slider.style.left = '0%';
    } else if (slideNumber === 3) {
        slider.style.left = '-20%';
    }
    }

