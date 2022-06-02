// ======================= Swiper
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   freeMode: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   // ======================= when windows is >= 600px
   breakpoints: {
      600: {
         slidesPerView: 2,
      },
   },
});
