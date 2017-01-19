$(document).ready(function () {

  if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
    $("#facebook-link").attr("href", "fb://profile/233576250401566");
  }

  $('.slider').slider(
    {
      full_width: true,
      interval: 3500,
      indicators: true,
      height: (window.screen.width < 601 ? 400 : 600)
    }
  );

  if (window.screen.width > 600) {
    $("#brand-text").html(' Richvale Medical Center <span class="small" >&amp; Walk-in Clinic</span>');
  } else {
    $("#brand-text").html(' Richvale Medical');
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
    $('.navbar-fixed').animate({ marginTop: '0px' }, 250);
  }, 3500);

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        alert(target.offset().top);
        var scrollTo = target.offset().top ? target.offset().top - 62 : 0;
        $('html, body').animate({
          scrollTop: scrollTo
        }, 1000);
        return false;
      }
    }
  });
})
