import "./css/style.css";
import "./css/shapes.css";
import "./index.html";
import Rellax from "rellax";
import anime from "animejs/lib/anime.es.js";

const rellax = new Rellax(".rellax");

// const lineAnimation = anime({
//   targets: ".line-path",
//   d: {
//     value:
//       "M.35,68.54c54.66-52.67,97.49,2.14,154,11,89.8,14.09,123.62-60.55,233-25,89.52,29.1,100.88,87.52,211,121,82.41,25.06,76.88-77,129-83,74.82-8.61,115.81,68.29,197,35,97.67-40.05,108.92-120.38,250-127,54.39-2.55,174.08,113.81,269,28"
//   },
//   easing: "easeInOutSine",
//   autoplay: false
// });

const menuTriggers = [
  document.querySelector(".hamburger"),
  document.querySelector(".nav-list")
];

menuTriggers.forEach(el =>
  el.addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("hamburger--active");
    document
      .querySelector(".header__nav")
      .classList.toggle("header__nav--active");
    document
      .querySelector(".menu-overlay")
      .classList.toggle("menu-overlay--active");
  })
);

// function updatePath(e) {
//   const width = window.innerWidth;
//   let x = e.offsetLeft;

//   x = e.screenX;

//   const xPercentage = x / width;
//   lineAnimation.seek(lineAnimation.duration * xPercentage);
// }

// window.addEventListener("mousemove", updatePath);
