"use strict";
import * as swiper from "./swiper.js";
import * as nav from "./nav.js";
// ======================= get elemnts
const faqs = document.querySelectorAll(".faq"); // qustion answer
// ======================= show / hide faq answer
faqs.forEach((faq) => {
   faq.addEventListener("click", () => {
      openAnswer(faq);
   });
});
const openAnswer = (faq) => {
   faq.classList.toggle("open");
   // ======================= chang icon
   const icon = faq.querySelector(".faq__icon i");
   if (icon.classList.contains("uil-plus")) {
      icon.classList.replace("uil-plus", "uil-minus");
   } else {
      icon.classList.replace("uil-minus", "uil-plus");
   }
};
// ======================= to top
const btnToTop = document.getElementById("btnToTop"); // btn to top
btnToTop.addEventListener("click", () => {
   scrollTo({
      top: 0,
      behavior: "smooth",
   });
});
