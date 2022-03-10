/*
Слайдер Swiper
Документация:
https://swiperjs.com/swiper-api
Сниппет: n-swiper
Не забыть подключить стили в scss/vendors.scss
*/
import Swiper, {Navigation} from "swiper";

// Инициализация слайдеров
function initSliders() {
   // Проверяем, есть ли слайдер на стронице
   if (document.querySelector(".testimonials__swiper")) {
      // Создаем слайдер
      new Swiper(".testimonials__swiper", {
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation],
         observer: true,
         observeParents: true,
         slidesPerView: 2,
         spaceBetween: 50,
         autoHeight: true,
         speed: 800,
         loop: true,
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

         // Пагинация
         /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

         // Скроллбар
         /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

         // Кнопки "влево/вправо"
         navigation: {
            prevEl: ".testimonials__prev",
            nextEl: ".testimonials__next",
         },

         // Брейкпоинты

         breakpoints: {
            320: {
               slidesPerView: 1
            },
            768: {
               slidesPerView: 2,

            },
            992: {},
            1268: {},
         },
         // События
         on: {},
      });
   }
}

window.addEventListener("load", function (e) {
   // Запуск инициализации слайдеров
   initSliders();
});
