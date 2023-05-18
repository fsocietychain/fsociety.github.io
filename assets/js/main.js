jQuery(document).ready(function($) {
	"use strict";
	$('header a[href*=\\#]').on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});
	$('.exchange-carousel').owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		navigation: true,
		navText: ["<div class='chevron-left'></i>", "<div class='chevron-right'></i>", ],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 3,
				nav: false
			},
			1000: {
				items: 5,
				nav: true,
				dots: false,
				loop: true,
			}
		}
	});
	$('.affiliate-carousel').owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		navigation: true,
		navText: ["<div class='chevron-left'></i>", "<div class='chevron-right'></i>", ],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 3,
				nav: false
			},
			1000: {
				items: 5,
				nav: true,
				dots: false,
				loop: true,
			}
		}
	});
	$('.specs-carousel').owlCarousel({
		loop: true,
		margin: 30,
		dots: true,
		navigation: false,
		navText: ["<div class='chevron-left'></i>", "<div class='chevron-right'></i>", ],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
				loop: true,
			}
		}
	});
});