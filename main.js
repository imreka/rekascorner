// Preloader
$(window).on('load', function() {
  if ($('#preloader').length) {
    $('#preloader').delay(100).fadeOut('slow', function() {
      $(this).remove();
    });
  }
});

// Back to top button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});

/*--/ Star ScrollTop /--*/
$('.scrolltop-mf').on("click", function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
});


$(document).on("scroll", function() {

  if ($(document).scrollTop() > 80) {
    $(".navbar-custom").addClass("shrink");
  } else {
    $(".navbar-custom").removeClass("shrink");
  }

});
