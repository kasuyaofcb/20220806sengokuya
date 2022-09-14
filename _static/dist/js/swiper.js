'use strict'
{

  const swiper = new Swiper(".swiper", {
    // spaceBetween: 10,
  centeredSlides: true,
	loop: true,
	slidesPerView: 1.25,
	spaceBetween: 0,
    breakpoints: {
      600: {
        slidesPerView: 1,
        slidesPerView: "auto"
      }
    },
  });

}
