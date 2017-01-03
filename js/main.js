$(document).ready(function () {
  $('.carousel.carousel-slider').carousel({full_width: true});
  $('.navbar-fixed').css({'margin-top':'-68px'});

  setTimeout(function () {
    $('.navbar-fixed').animate({ marginTop: '0px' }, 500);
    $('.carousel').carousel('next');
    setInterval(function () {
      $('.carousel').carousel('next');
    }, 4000);
  }, 2000);
})
