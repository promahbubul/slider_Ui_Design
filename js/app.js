
$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: '6000',
      prevArrow: '.prev_btn',
      nextArrow: '.next_btn',
      dots: true,
      appendDots: '.slider_dots',
      fade: true,
    });
  });