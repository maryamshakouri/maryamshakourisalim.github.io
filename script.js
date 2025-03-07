
document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";

            // Pause videos when not active
            if (slide.tagName === "VIDEO") {
                slide.pause();
            }
        });

        // Play video if it's the current slide
        if (slides[index].tagName === "VIDEO") {
            slides[index].play();
        }
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);

    showSlide(slideIndex); // Display first slide

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 16000);
});
