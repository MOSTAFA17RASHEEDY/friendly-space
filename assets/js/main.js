/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("nav__show");
  });
}

// hide menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("nav__show");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const closeMenu = () => {
  navMenu.classList.remove("nav__show");
};

navLink.forEach((n) => n.addEventListener("click", closeMenu));
/*=============== ADD BLUR HEADER ===============*/
const blurheader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurheader);
/*=============== SWIPER PLANETS ===============*/
const swiper = new Swiper(".travel__swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: "32",
  slidesPerView: "auto",
  grabCursor: true,
  centeredSlides: "auto",
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = document.getElementById("scroll-up");
const showScroll = () => {
  this.scrollY >= 350
    ? scrollUp.classList.add("show__scrollup")
    : scrollUp.classList.remove("show__scrollup");
};
window.addEventListener("scroll", showScroll);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    sectionId = current.getAttribute("id");
    sectionClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 300,
  reset: true, // Animations repeat
});

sr.reveal(`.home__data ,.travel__swiper,.contact__container`);
sr.reveal(`.home__img`, { origin: "bottom" });
sr.reveal(`.home__ovni`, { delay: 800 });
sr.reveal(`.explore__img`, { origin: "left" });
sr.reveal(`.explore__data`, { origin: "right" });
sr.reveal(`.history__card`, { interval: 100 });
sr.reveal(`.history__plante-1`, { origin: "left", delay: 1000 });
sr.reveal(`.history__plante-2`, { origin: "right", delay: 1200 });
sr.reveal(`.footer__plante-1`, { origin: "bottom", delay: 600 });
sr.reveal(`.footer__plante-2`, { delay: 800 });
