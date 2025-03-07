document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  

});
document.addEventListener("DOMContentLoaded", function() {
    let dropdownMenu = document.querySelector(".header__dropdown-menu");
    let dropdownToggle = document.querySelector(".header__dropdown-toggle");
    let dropdown = document.querySelector(".header__dropdown");

    window.addEventListener("scroll", function() {
        if (window.scrollY === 0) {
            dropdownMenu.classList.add("show-menu");
        } else {
            dropdownMenu.classList.remove("show-menu");
        }
    });

    dropdownToggle.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("show-menu");
    });

    document.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.classList.remove("show-menu");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector("header");
    let lastScrollY = window.scrollY;
    let isAnimating = false;

    window.addEventListener("scroll", function () {
        let currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && !isAnimating) {
            // Khi cuộn xuống
            header.classList.remove("visible");
            header.classList.add("slide-down");
            isAnimating = true;
        } 
        else if (currentScrollY < lastScrollY) {
            // Khi cuộn lên
            header.classList.remove("slide-down");
            header.classList.add("visible");
            isAnimating = false;
        }

        lastScrollY = currentScrollY;
    });
});
