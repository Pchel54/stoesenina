window.onscroll = () =>{
   const header = document.querySelector('.header_top');
   const Y = window.scrollY;
   
   if(Y > 40) {
      header.classList.add('header_fixed');
   } else if(Y < 105){
      header.classList.remove('header_fixed');
   }
}
