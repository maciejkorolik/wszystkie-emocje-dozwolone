import "./css/style.css";
import "./css/shapes.css";
import "./index.html";
import Rellax from "rellax";
import anime from "animejs/lib/anime.es.js";
import MenuSpy from "menuspy";

const rellax = new Rellax(".rellax", { center: true });

const navigation = document.querySelector(".header__nav");
const menuspy = new MenuSpy(navigation);

let offerVisible = false;

const menuTriggers = [
  document.querySelector(".hamburger"),
  document.querySelector(".nav-list")
];
const offerButtons = document.querySelectorAll(".btn--offer");

function animateOfferButton(target, scale, duration, elasticity) {
  anime.remove(target);
  anime({
    targets: target,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}
function enterOfferButton(target) {
  !offerVisible && animateOfferButton(target, 1.1, 800, 400);
}
function leaveOfferButton(target) {
  !offerVisible && animateOfferButton(target, 1.0, 600, 300);
}

function revealDetails(target) {
  offerVisible = true;
  const offerButton = target.querySelector(".btn--offer");
  const currentOffer = target.dataset.offer;
  const offerDetails = document.querySelector(
    `.offer-details--offer${currentOffer}`
  );
  anime.remove(target);
  anime.remove(offerButton);
  document.body.style.overflow = "hidden";
  anime({
    targets: target,
    scale: [
      { value: 30, duration: 500 },
      { value: 1, duration: 100, delay: 300 }
    ],
    zIndex: [
      { value: 300, duration: 1 },
      { value: 10, duration: 100, delay: 1000 }
    ],
    easing: "easeInOutSine",
    loop: false
  });
  anime({
    targets: offerButton,
    opacity: [
      { value: 0, duration: 1 },
      { value: 1, duration: 1, delay: 1000 }
    ],
    loop: false
  });
  setTimeout(() => {
    offerDetails.classList.add("offer-details--active");
  }, 300);
  offerDetails.addEventListener("click", hideOfferDetails);
}

// function hideOfferDetails(target) {
//   if (offerVisible) {
//     const currentOffer = document.querySelector(".offer-details--active");
//     target.addEventListener("click", () => {
//       currentOffer.classList.remove("offer-details--active");
//     });
//     document.body.style.overflow = "visible";
//     console.log("done");
//   }
// }

function hideOfferDetails() {
  if (offerVisible) {
    document.querySelectorAll(".offer-details").forEach(el => {
      el.classList.remove("offer-details--active");
    });
    offerVisible = false;
    document.body.style.overflow = "visible";
  }
}

offerButtons.forEach(el =>
  el.addEventListener("mouseenter", event => {
    enterOfferButton(event.currentTarget.parentNode), false;
  })
);
offerButtons.forEach(el =>
  el.addEventListener("mouseleave", event => {
    leaveOfferButton(event.currentTarget.parentNode), false;
  })
);
offerButtons.forEach(el =>
  el.addEventListener("click", event => {
    revealDetails(event.currentTarget.parentNode), false;
  })
);

menuTriggers.forEach(el =>
  el.addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("hamburger--active");
    document
      .querySelector(".header__nav")
      .classList.toggle("header__nav--active");
    document
      .querySelector(".menu-overlay")
      .classList.toggle("menu-overlay--active");
    hideOfferDetails();
  })
);
