$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });

  let hamburger = document.querySelector(".hamburger");
  let times = document.querySelector(".times");
  let mobileNav = document.querySelector(".mobile-nav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.add("open");
  });

  times.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
});
