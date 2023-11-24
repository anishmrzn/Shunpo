"use strict";

const navButton = document.querySelector(".nav-button");
const navButtonLink = document.querySelector(".nav-btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".remove-btn");

navButton.addEventListener("click", function () {
  navButtonLink.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

const closeNav = function () {
  navButtonLink.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeBtn.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !navButton.classList.contains("hidden")) {
    closeNav();
  }
});
