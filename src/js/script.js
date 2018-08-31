

(function ($) {
	'use strict';

	$('.slider').slick({
		dots: false,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'ease-in-out'
	});


var picWidth = (($('.insta__picture')).width());
$('#insta__box').css('width', picWidth );




})(jQuery)