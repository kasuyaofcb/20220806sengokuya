'use strict'
{

  const swiper = new Swiper(".swiper", {
    // spaceBetween: 10,
  centeredSlides: true,
	loop: true,
	slidesPerView: 1.25,
	spaceBetween: 20,
    breakpoints: {
      1025: {
        width:1024,
        height:768,
        slidesPerView: "auto"
      }
    },
  });

}
