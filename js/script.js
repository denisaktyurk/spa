$(document).ready(function(){

	$('.carousel-one').owlCarousel({
		margin:5,
		loop: true,
		rewind: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items:3,
			},
			991: {
				items: 4,
			}
		},
	});

 	$('.carousel-two').owlCarousel({
	   loop:true,
	   margin:10,
	   nav:false,
	   items: 1,
	   autoplay: true,
	});

	$('.services__item').hover(function() {
			$(this).find(".services__item-onhover").css("visibility", "visible").css("opacity", "100%");
	}, function() {
			$(this).find(".services__item-onhover").css("visibility", "hidden").css("opacity", "0");
	});
});