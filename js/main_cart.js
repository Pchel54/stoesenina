// Thank you for the order 
document.addEventListener('DOMContentLoaded', function() {

   // Select
   $('select').niceSelect();
   
   let formClose = document.querySelector('.cont-form-order'),
       thankPeople = document.querySelector('.thank-people'),
       buttonSave = document.querySelector('.btn-save');


   buttonSave.addEventListener('click', function(e){
      e.preventDefault();
      formClose.classList.add('js-mod-active');
      thankPeople.classList.remove('js-mod-active');
      document.documentElement.scrollTop = 0; 
   }); 

   
   let parent = document.querySelector('.payment-col ul'),
          menuItem = parent.querySelectorAll('.pay-btn');

      parent.addEventListener('click', (event) => {
            
      let target = event.target;
            
         if(target.classList.contains('pay-btn')) {
            for(let i = 0; i < menuItem.length; i++) {
                  menuItem[i].classList.remove('pay-btn-active');
               }
                  target.classList.add('pay-btn-active');
         }
   });
});
// Thank you for the order -END

