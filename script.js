document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded successfully");

    // Menu Dropdown
    const menuButton = document.querySelector(".menu-button");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });

    // Carousel Slider
    let index = 0;
    function moveCarousel() {
        const carousel = document.querySelector(".carousel-container");
        index = (index + 1) % 3; // 3 images in the carousel
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }
    setInterval(moveCarousel, 3000);
});
