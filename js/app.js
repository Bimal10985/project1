$(function () {
  AOS.init();
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });
  AOS.refresh();
});


// window.onscroll = function(){
// if (window.scrollY > 100){
    
//     $('.navbar-navbar').addClass('solid');
// }
// else{
//     $('.navbar-navbar').removeClass('solid');
    
// }
// }

