$(document).ready(function () {

  $('.slider').slider(
    {
      full_width: true,
      height: 600,
      interval: 4000,
      indicators: false
    }
  );

  setTimeout(function () {
    $('.navbar-fixed').animate({ marginTop: '0px' }, 1000);
  }, 3000);
})
