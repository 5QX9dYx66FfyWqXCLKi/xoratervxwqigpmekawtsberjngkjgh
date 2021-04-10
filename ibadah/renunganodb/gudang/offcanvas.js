$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active');
		$('html, body').animate({
    		scrollTop: $("#top").offset().top
		}, 0);
  });
});