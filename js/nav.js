"use strict";
// ======================= get elemnts
const nav = document.querySelector("nav"); // navbar
const openMenu = document.getElementById("openMenu"); // open icon
const closeMenu = document.getElementById("closeMenu"); // close icon
const navMenu = document.getElementById("navMenu"); // nav menu
// ======================= windows scroll
addEventListener("scroll", () => {
   nav.classList.toggle("window-scroll", scrollY > 10);
});
// ======================= show / hide MENU
const showMenu = () => {
   navMenu.style.display = "flex";
   openMenu.style.display = "none";
   closeMenu.style.display = "inline-block";
};
const hideMenu = () => {
   navMenu.style.display = "none";
   openMenu.style.display = "inline-block";
   closeMenu.style.display = "none";
};
openMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);
