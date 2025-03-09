document.addEventListener("DOMContentLoaded", function () {
  // do your setup here
});
document.addEventListener("DOMContentLoaded", function () {
  let dropdownMenu = document.querySelector(".header__dropdown-menu");
  let dropdownToggle = document.querySelector(".header__dropdown-toggle");
  let dropdown = document.querySelector(".header__dropdown");

  window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
      dropdownMenu.classList.add("show-menu");
    } else {
      dropdownMenu.classList.remove("show-menu");
    }
  });

  dropdownToggle.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownMenu.classList.toggle("show-menu");
  });

  document.addEventListener("click", function (event) {
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
    } else if (currentScrollY < lastScrollY) {
      // Khi cuộn lên
      header.classList.remove("slide-down");
      header.classList.add("visible");
      isAnimating = false;
    }

    lastScrollY = currentScrollY;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let track = document.querySelector(".slider__track");
  let slides = document.querySelectorAll(".slider__slide");
  let totalSlides = slides.length;
  let currentIndex = 0;
  let intervalTime = 3000; // 3 giây

  function moveSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    let offset = -currentIndex * 100; // Dịch chuyển -100% mỗi lần
    track.style.transform = `translateX(${offset}%)`;
  }

  setInterval(moveSlide, intervalTime);
});
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".slider__track");
  const slides = document.querySelectorAll(".slider__slide");
  const dots = document.querySelectorAll(".dot");
  const prevButton = document.querySelector(".flickity-button.previous");
  const nextButton = document.querySelector(".flickity-button.next");

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoSlideInterval;

  function updateSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide(currentIndex);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Sự kiện click cho các nút điều hướng
  nextButton.addEventListener("click", function () {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  prevButton.addEventListener("click", function () {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  // Sự kiện click cho dot
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      stopAutoSlide();
      currentIndex = index;
      updateSlide(currentIndex);
      startAutoSlide();
    });
  });

  // Bắt đầu tự động chuyển slide
  startAutoSlide();
});
