'use strict';
//Strict mode enforces stricter parsing and error handling of JavaScript code at runtime.
//It helps to catch common coding mistakes that might otherwise go unnoticed or result in silent errors.


/**
 * add event on element
 */

//The addEventOnElem function is a reusable utility that simplifies adding event listeners to elements.
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 * what I struggled with to be able to fit all screens
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 * Scroll Event Listener: An event listener is attached to the window object's scroll event. 
 * This means that the activeElemOnScroll function will be executed every time the user scrolls the page.
 * Inside the activeElemOnScroll function, the window.scrollY property is checked. 
 * This property returns the vertical scroll position in pixels.

 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);