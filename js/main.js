let modalProgg = document.querySelector('.modal-progg'),
    modalForm = document.querySelector('.modal-form'),
    buttonProgg = document.querySelector('.basket_btn'),
    buttonForm = document.querySelector('.calc-btn'),
    closeKrests = document.querySelectorAll('.modal-krest'),
    overlays = document.querySelectorAll('.overlay'),
    modalButton1 = document.querySelector('.modal_btn1'),
    burgerLine = document.querySelector('.navbar');
   
document.addEventListener('DOMContentLoaded', function () {

   burgerLine.addEventListener('click', function () {
      let nav = document.querySelector('.nav');
      nav.classList.add('nav-avtive');
      nav.addEventListener('click', function () {
         nav.classList.remove('nav-avtive');
      });
   });

   buttonForm.addEventListener('click', function () {
      modalForm.classList.remove('js-mod-none');
   });

   buttonProgg.addEventListener('click', function () {
      modalProgg.classList.remove('js-mod-none');
   });

   buttonForm.addEventListener('click', function () {
      modalForm.classList.remove('js-mod-none');
   });

   closeKrests.forEach(function (item) {
      item.addEventListener('click', function (e) {
         e.preventDefault();
         modalProgg.classList.add('js-mod-none');
         modalForm.classList.add('js-mod-none');
      });
   });

   overlays.forEach(function (item) {
      item.addEventListener('click', function (e) {
         e.preventDefault();
         modalProgg.classList.add('js-mod-none');
         modalForm.classList.add('js-mod-none');
      });
   });

   modalButton1.addEventListener('click', function () {
      modalForm.classList.add('js-mod-none');
   });


   const smoothLinks = document.querySelectorAll('a[href^="#"]');

      for (let smoothLink of smoothLinks) {
         smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
            });
         });
      };


      
//  Section Perfect_menu
   let parent = document.querySelector('.pm_menu_number'),
       menuItem = parent.querySelectorAll('.menu_number-item');

   parent.addEventListener('click', (event) => {

      let target = event.target;

      if (target.classList.contains('menu_number-item')) {
         for (let i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove('pm_acvtive');
         };
         target.classList.add('pm_acvtive');
      };
   });


   let parent1 = document.querySelector('.day_menu-list'),
       menuItem1 = parent1.querySelectorAll('.mune_list_item');

   parent1.addEventListener('click', (event) => {

      let target = event.target;

      if (target.classList.contains('mune_list_item')) {
         for (let i = 0; i < menuItem1.length; i++) {
            menuItem1[i].classList.remove('pm_acvtive');
         };
         target.classList.add('pm_acvtive');
      };
   });

   // Menu_week
   let parent2 = document.querySelector('.weekday'),
       menuItem2 = parent2.querySelectorAll('.weekday_number');

   parent2.addEventListener('click', (event) => {

      let target = event.target;

      if (target.classList.contains('weekday_number')) {
         for (let i = 0; i < menuItem2.length; i++) {
            menuItem2[i].classList.remove('weekday_active');
         };
         target.classList.add('weekday_active');
      };
   });
   
   
   // My_form
   //Gender active
   let parent3 = document.querySelector('.gender-list'),
       menuItem3 = parent3.querySelectorAll('.gender-item'),
       svgBg = document.querySelectorAll('.svg-gender');
      
   parent3.addEventListener('click', (event) => {
      
      let target = event.target;
            
      if (target.classList.contains('gender-item')) {
         for (let i = 0; i < menuItem3.length; i++) {
            menuItem3[i].classList.remove('gender-item-acvtive');
         };

         target.classList.add('gender-item-acvtive');

         if(menuItem3[i].classList.contains('gender-item-acvtive')){ 
            svgBg[i].setAttributeNS(null,"fill","#fff");
         } else {
            svgBg[i].setAttributeNS(null,"fill","#000");
         };
      };
   })

   //Fitness active
   let parent4 = document.querySelector('.cel-fitness'),
       menuItem4 = parent4.querySelectorAll('.cacl-li');

   parent4.addEventListener('click', (event) => {

      let target = event.target;

      if (target.classList.contains('cacl-li')) {
         for (let i = 0; i < menuItem4.length; i++) {
            menuItem4[i].classList.remove('cacl-li-active');
         }
         target.classList.add('cacl-li-active');
      }
   });

   //Purpose active
   let parent5 = document.querySelector('.cel-people'),
       menuItem5 = parent5.querySelectorAll('.cacl-li');

   parent5.addEventListener('click', (event) => {

      let target = event.target;

      if (target.classList.contains('cacl-li')) {
         for (let i = 0; i < menuItem5.length; i++) {
            menuItem5[i].classList.remove('cacl-li-active');
         };
         target.classList.add('cacl-li-active');
      };
   });

   //  Swiper index.html
   // Section Menu
   let sliderTrumbs = new Swiper('.slider_trumbs .swiper-container', {
      direction: 'vertical',
      slidesPerView: 3,
      loop: true,
      autoplay: true,
      spaceBetween: 32,
      navigation: {
         nextEl: '.menu_btn_next',
      }
   });

   let sliderImage = new Swiper('.slider_images .swiper-container', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: true,
      navigation: {
         nextEl: '.menu_btn_next',
      }
   });

   // Section- Menu_week
   let sliderWeek1 = new Swiper('.weekday-slider .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      breakpoints: {
         100: {
            slidesPerView: 3,
            spaceBetween: 15,
         },
         750: {
            slidesPerView: 5,
            spaceBetween: 15,
         },
         1200: {
            slidesPerView: 7,
            spaceBetween: 65,
         },
      }
   });


   //Section Customer_reviews
   let swiper = new Swiper('.swiper_revies_item .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 'auto',
      loop: true,
      navigation: {
         prevEl: '.sw-button-prev',
         nextEl: '.sw-button-next',
      },

      pagination: {
         el: '.swiper-pagination',
         type: 'fraction',
         renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' из ' +
               '<span class="' + totalClass + '"></span>';
         },
      },

      breakpoints: {
         100: {
            slidesPerView: 1,
            spaceBetween: 35,
         },
         715: {
            slidesPerView: 2,
            spaceBetween: 15,
         },
         955: {
            slidesPerView: 3,
            spaceBetween: 45,
         },
      }
   });
   //Swiper END

   // END DOMContentLoaded
});






















