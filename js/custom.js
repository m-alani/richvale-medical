$(document).ready(function () {

  var margin = 60;

  if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
    $("#facebook-link").attr("href", "fb://profile/233576250401566");
  }

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        var scrollTo = target.offset().top ? target.offset().top - margin : 0;
        $('html, body').animate({
          scrollTop: scrollTo
        }, 1000);
        return false;
      }
    }
  });

  $('.slider').slider(
    {
      full_width: true,
      interval: 5000,
      indicators: true,
      height: (window.screen.width < 601 ? 400 : 600)
    }
  );

  $('.slider').slider('pause');

  if (window.screen.width > 600) {
    $("#brand-text").html(' Richvale Medical Center <span class="small" >&amp; Walk-in Clinic</span>');
    margin = 64;
  } else {
    $("#brand-text").html(' Richvale Medical Center');
  }

  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 10, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );

  setTimeout(function () {
    $('.navbar-fixed').animate({ marginTop: '0px' }, 500);
    $('.slider').slider('next');
    $('.slider').slider('start');
  }, 2000);
})
