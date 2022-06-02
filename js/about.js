"use strict";
import * as nav from "./nav.js";
// ================ get elements
const counts = document.querySelectorAll(".item__count");
// ================ count
counts.forEach(count => {
   setCount(count)
});
function setCount(el){
   let count = el.dataset.count;
   let counter = setInterval(()=>{
      el.innerHTML++;
      if(count == el.textContent ) {
         clearInterval(counter)
      }
   },10)
}
// ======================= to top
const btnToTop = document.getElementById("btnToTop"); // btn to top
btnToTop.addEventListener("click", () => {
   scrollTo({
      top: 0,
      behavior: "smooth",
   });
});
