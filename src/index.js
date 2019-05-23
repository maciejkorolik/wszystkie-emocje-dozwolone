import "./css/style.css";
import "./index.html";
import anime from "animejs/lib/anime.es.js";

console.log("built");

const hamburgerButton = document.querySelector(".hamburger");

const menuSlide = anime({
  targets: ".header__nav",
  translateY: [-500, 0],
  easing: "easeInOutQuad",
  duration: 900,
  autoplay: false
});
const menuShape = anime({
  targets: ".path--nav",
  d: {
    value:
      "M0,298s11,69,33,77,18-32,52-33,39,29,58,29,27-55,51-56,24,61,61,61,65-54,65-54V0H0Z"
  },
  duration: 900,
  easing: "easeInOutQuad",
  autoplay: false
});
menuSlide.reverse();
menuShape.reverse();

function toggleMenu() {
  menuSlide.reverse();
  menuShape.reverse();
  menuSlide.completed = false;
  menuShape.completed = false;
  menuSlide.play();
  menuShape.play();
}

hamburgerButton.addEventListener("click", () => {
  toggleMenu();
  hamburgerButton.classList.toggle("hamburger--active");
});
