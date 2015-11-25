$(document).ready(function(){

	var nav = $('.navbar-fixed-top');

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll>=50) {
			nav.addClass('effect');
		} else{
			nav.removeClass('effect');
		};
	});


	$('.fancybox').fancybox();


	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
		controlNav: false
	});

});

smoothScroll.init({
	speed: 700,
	easing: 'easeInOutQuad',
	updateURL: false,
});