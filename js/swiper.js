// 'use strict'
// {

//   const swiper = new Swiper('.fv__slider', {
//     // ページネーションが必要なら追加
//     // pagination: {
//     //   el: ".swiper-pagination"
//     // },
//     // grabCursor: false,
//     noSwiping:true,
//     noSwipingClass: 'stop-swiping',
//     centeredSlides: true,
//     offsetPxBefore:1000,
//     slidesPerView: "1",
//     effect: "coverflow",
//     onSlideChangeEnd: function(swiperE){
//       alert(swiper.activeIndex)
//     },
//     coverflowEffect: {
//     rotate: 0,
//     stretch: 30,
//     depth: 300,
//     // modifier: 1,
//     slideShadows: false,
//   },
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//   },
//     loop: true,
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//     // ナビボタンが必要なら追加
//     // navigation: {
//     //   nextEl: ".swiper-button-next",
//     //   prevEl: ".swiper-button-prev"
//     // }
//     breakpoints: {
//       // 1px以上の場合
//       1: {
//         effect: "slide",
//       },
//       // 600px以上の場合
//       600: {
//         effect: "coverflow",
//       },

//     }
//   });

//   const swiperSp = new Swiper('.fv__sliderSp', {
//     // ページネーションが必要なら追加
//     pagination: {
//       el: ".swiper-pagination"
//     },
//     // grabCursor: false,
//     noSwiping:true,
//     noSwipingClass: 'stop-swiping',
//     centeredSlides: true,
//     offsetPxBefore:1000,
//     slidesPerView: "1",
//     effect: "slide",
//     coverflowEffect: {
//     rotate: 0,
//     stretch: 30,
//     // modifier: 1,
//     slideShadows: false,

//   },
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//   },
//     loop: true,
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//   });


//   const swiper2 = new Swiper('.blogList__slider', {
//     // ページネーションが必要なら追加
//     // pagination: {
//     //   el: ".swiper-pagination"
//     // },
//     grabCursor: true,
//     centeredSlides: true,
//     offsetPxBefore:1000,
//     slidesPerView: "1",
//     effect: "slide",
//     coverflowEffect: {
//     rotate: 0,
//     stretch: 30,
//     depth: 300,
//     // modifier: 1,
//     slideShadows: false,

//   },
//   //   autoplay: {
//   //     delay: 5000,
//   //     disableOnInteraction: false,
//   // },
//     loop: true,
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//     // ナビボタンが必要なら追加
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     }
//   });




// // プログレスサークル__pc
//       document.addEventListener('DOMContentLoaded',function(){
//         const active = document.querySelector('.circle');
//         active.classList.toggle('active');
//         let count = 0;
//         const countUp = () => {
//           count++;
//           const timeoutId = setTimeout(countUp, 1000);
//           if(count > 5){
//             clearTimeout(timeoutId); //timeoutIdをclearTimeoutで指定している
//             active.classList.toggle('active');
//           }
//         }
//         countUp();
//       } );

//       swiper.on('slideChangeTransitionStart', function () {

//         const active = document.querySelector('.circle');

//         active.classList.toggle('active');

//         let count = 0;
//         const countUp = () => {
//           count++;
//           const timeoutId = setTimeout(countUp, 1000);
//           if(count > 5){
//             clearTimeout(timeoutId); //timeoutIdをclearTimeoutで指定している
//             active.classList.toggle('active');
//           }
//         }
//         countUp();
//         const molecule = document.querySelector('.swiper-slide-active');
//         const molecule1 = molecule.getAttribute("data-swiper-slide-index")
//         const moleculeAmount = document.querySelector('.fv__loadingMolecule');
//         moleculeAmount.innerHTML = Number(molecule1) + 1;
//       });

//       const pairents = document.querySelector('.swiper-wrapper');
//       const child = pairents.children;
//       const childAmount = child.length;
//       const denominator = document.querySelector('.fv__loadingDenominator');
//       denominator.innerHTML = childAmount / 3;


// // プログレスサークル__SP
//       document.addEventListener('DOMContentLoaded',function(){
//         const active__sp = document.querySelector('.circle__sp');
//         active__sp.classList.toggle('active__sp');
//         let count = 0;
//         const countUp = () => {
//           count++;
//           const timeoutId = setTimeout(countUp, 1000);
//           if(count > 5){
//             clearTimeout(timeoutId); //timeoutIdをclearTimeoutで指定している
//             active__sp.classList.toggle('active__sp');
//           }
//         }
//         countUp();
//       } );

//       swiperSp.on('slideChangeTransitionStart', function () {

//         const active__sp = document.querySelector('.circle__sp');

//         active__sp.classList.toggle('active__sp');

//         let count = 0;
//         const countUp = () => {
//           count++;
//           const timeoutId = setTimeout(countUp, 1000);
//           if(count > 5){
//             clearTimeout(timeoutId); //timeoutIdをclearTimeoutで指定している
//             active__sp.classList.toggle('active__sp');
//           }
//         }
//         countUp();
//         const molecule__sp = document.querySelector('.swiper-slide-active');
//         const molecule1__sp = molecule__sp.getAttribute("data-swiper-slide-index")
//         const moleculeAmount__sp = document.querySelector('.fv__loadingMolecule__sp');
//         moleculeAmount__sp.innerHTML = Number(molecule1__sp) + 1;
//       });

//       const pairents__sp = document.querySelector('.swiper-wrapper');
//       const child___sp = pairents__sp.children;
//       const childAmount__sp = child___sp.length;
//       const denominator__sp = document.querySelector('.fv__loadingDenominator__sp');
//       denominator__sp.innerHTML = childAmount__sp / 3;

// }
