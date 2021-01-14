// Tab Filters

const portfolioFilterBtns = document.querySelectorAll(
  ".portfolio-filter button"
);

portfolioFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.querySelector("button.active").classList.remove("active");
    btn.classList.add("active");

    // Filter Items
    const category = btn.dataset.filter;
    document.querySelectorAll(".portfolio-item").forEach((item) => {
      if (category === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else if (item.dataset.category === category) {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  });
});

// Lightbox

const lightboxImages = document.querySelectorAll(".portfolio-item");
const lightbox = document.querySelector(".lightbox");

lightboxImages.forEach((item, index) => {
  item.addEventListener("click", () => {
    lightbox.classList.toggle("open");
    lightbox.querySelector("img").src = item
      .querySelector("img")
      .getAttribute("src");
    lightbox.querySelector(".caption-text").innerText = item.querySelector(
      ".portfolio-info h4"
    ).innerText;
    lightbox.querySelector(".caption-counter").innerText = `${index + 1} of ${
      lightboxImages.length
    }`;
  });
});

document.querySelector(".lightbox-close").addEventListener("click", () => {
  lightbox.classList.toggle("open");
});

document.querySelector(".next").addEventListener("click", () => {
  let currentImgInd = +lightbox
    .querySelector(".caption-counter")
    .innerText.split("")[0];
  let nextImgEl = lightboxImages[currentImgInd];

  if (!nextImgEl) {
    currentImgInd = 0;
    nextImgEl = lightboxImages[currentImgInd];
  }

  lightbox.querySelector("img").src = nextImgEl
    .querySelector("img")
    .getAttribute("src");
  lightbox.querySelector(".caption-text").innerText = nextImgEl.querySelector(
    ".portfolio-info h4"
  ).innerText;
  lightbox.querySelector(".caption-counter").innerText = `${
    +currentImgInd + 1
  } of ${lightboxImages.length}`;
});

document.querySelector(".previous").addEventListener("click", () => {
  let currentImgInd =
    +lightbox.querySelector(".caption-counter").innerText.split("")[0] - 2;
  let prevImgEl = lightboxImages[currentImgInd];

  if (!prevImgEl) {
    currentImgInd = 5;
    prevImgEl = lightboxImages[currentImgInd];
  }

  lightbox.querySelector("img").src = prevImgEl
    .querySelector("img")
    .getAttribute("src");
  lightbox.querySelector(".caption-text").innerText = prevImgEl.querySelector(
    ".portfolio-info h4"
  ).innerText;
  lightbox.querySelector(".caption-counter").innerText = `${
    +currentImgInd + 1
  } of ${lightboxImages.length}`;
});

// Theme Switcher

const themes = document.querySelectorAll(".style-switcher ul li a");

themes.forEach((theme) => {
  theme.addEventListener("click", () => {
    const activateTheme = theme.getAttribute("title");
    document.querySelectorAll(".alternate-style").forEach((link) => {
      link.setAttribute("disabled", true);
      if (link.getAttribute("title") === activateTheme) {
        link.removeAttribute("disabled");
      }
    });
  });
});

document
  .querySelector(".toggle-style-switcher")
  .addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.toggle("open");
  });

document.querySelectorAll('[name="mode"]').forEach((el) => {
  el.addEventListener("change", (e) => {
    if (e.target.value === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.removeAttribute("class");
    }
  });
});

// Sidebar

const navLinks = document.querySelectorAll(".nav li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");
    const sectionName = e.target.getAttribute("href").replace("#", "");
    document
      .querySelectorAll("section")
      .forEach((sec) => sec.classList.remove("prevSection"));
    document.querySelector("section.active").classList.add("prevSection");
    document
      .querySelectorAll("section")
      .forEach((sec) => sec.classList.remove("active"));
    document.getElementById(sectionName).classList.add("active");

    if (window.innerWidth < 1200) {
      ham.classList.toggle("open");
      ham.parentElement.classList.toggle("open");
      document
        .querySelectorAll("section")
        .forEach((sec) => sec.classList.toggle("open"));
    }
  });
});

// Hamburger

const ham = document.querySelector(".nav-toggler");

ham.addEventListener("click", () => {
  ham.classList.toggle("open");
  ham.parentElement.classList.toggle("open");
  document
    .querySelectorAll("section")
    .forEach((sec) => sec.classList.toggle("open"));
});

// Preloader

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloader").classList.add("opacity-0");
  }, 1500);
});
