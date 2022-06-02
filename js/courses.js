"use strict";
import * as nav from "./nav.js";
// ======================= to top
const btnToTop = document.getElementById("btnToTop"); // btn to top
btnToTop.addEventListener("click", () => {
   scrollTo({
      top: 0,
      behavior: "smooth",
   });
});
