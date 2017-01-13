$(document).ready(function () {

  $('.slider').slider(
    {
      full_width: true,
      interval: 3000,
      indicators: false,
      height: (window.screen.width < 601 ? 400 : 600)
    }
  );

  setTimeout(function () {
    $('.navbar-fixed').animate({ marginTop: '0px' }, 500);
  }, 2500);
})
