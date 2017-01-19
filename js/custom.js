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
  }

  setTimeout(function () {
    $('.navbar-fixed').animate({ marginTop: '0px' }, 250);
  }, 3500);
})
