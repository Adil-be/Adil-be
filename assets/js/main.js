import { elements } from "./variables.js";
import { reveal } from "./function.js";
import { creationProject } from "./function.js";

let Burger = document.querySelector("#burger");
let navMobileContainer = document.querySelector(".navMobileContainer");
let navMobile = document.querySelector("#navMobile");

Burger.onclick = () => {
  if (navMobileContainer.classList.contains("open")) {
    closeMenu();
  } else {
    oppenMenu();
    navMobileContainer.onclick = (e) => {
      console.log(e.target != navMobile);
      if (e.target != navMobile) {
        closeMenu();
      }
    };
  }
};
function oppenMenu() {
  navMobileContainer.classList.add("open");
  Burger.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMenu() {
  navMobileContainer.classList.remove("open");
  Burger.classList.remove("open");
  document.body.style.overflow = "scroll";
}

window.onload = reveal();
window.addEventListener("scroll", reveal);
