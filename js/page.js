
$(window).load(function () {

	$('html, body').fadeIn(400);

	//REVERVE ORDER
	var windowW = $(window).width();

	if( windowW < 1024) {
		$('.subPage .title').insertAfter('.subPage .item:nth-child(3)');
		$('.subPage .content').insertAfter('.subPage .item:nth-child(4)');
	}
	$(window).resize(function () {
		var windowW = $(window).width();
		if( windowW < 1024) {
			$('.subPage .title').insertAfter('.subPage .item:nth-child(3)');
			$('.subPage .content').insertAfter('.subPage .item:nth-child(4)');
		}

			$('html, body').hide().fadeIn(400);

			var sizer = createSizer();
			var wall = new freewall("#singleContainer");
			createFreeWall(wall);
			fitHeight();

			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			 	window.location.reload();
			}
	});


	//SLICK SLIDER
	slickCarousel();
	$(window).resize(function() {
		slickCarousel();
	});

	fitHeight();

	var wall = new freewall("#singleContainer");
	createFreeWall(wall);

	//HEADER
	var windowW = $(window).width();
	// Show/Hide register form for target screen
	$('#registerBtn').click(function (e) {
		if($("#paivaPanel").hasClass('shown')) {
			e.preventDefault();
		} else {
			if (windowW > 800) {
				showRegisterForm("large", "#singleContainer");
			} else if (windowW > 500) {
				showRegisterForm("medium", "#singleContainer");
			} else {
				showRegisterForm("small", "#singleContainer");
			}	
		}
		return false;
	});

	$('a[id^=paivaBtn]').click(function (e) {		
		if($("#formPanel").hasClass('shown')) {
			e.preventDefault();
		} else {
			if (windowW > 800) {
				showPaivaPanel("large", "#singleContainer");
			} else if (windowW > 500) {
				showPaivaPanel("medium", "#singleContainer");
			} else {
				showPaivaPanel("small", "#singleContainer");
			}	
		}
			
		return false;
	});

	close("#singleContainer");

	resizingText();

});

function slickCarousel() {
	var wi =  $(window).width();
	var numberOfSlide;
	if (wi > 1024) {
		numberOfSlide = 6;
	} else if(wi > 600) {
		numberOfSlide = 4;
	} else {
		numberOfSlide = 2;
	}

	$("#slickSlider").slick({
		slidesToShow: numberOfSlide,
		slidesToScroll: numberOfSlide/2,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  swipeToSlide: true,
	  infinite: false
	});
}

function createFreeWall(wall) {
	var sizer = createSizer();

	wall.reset({
		selector: '.item',
		animate: true,
		cellW: sizer,
		cellH: sizer,
		gutterX : 0,
		gutterY: 0,
		onResize: function() {
			var item = $('#singleContainer .brick22');

			wall.fixSize({
				block: item,
				width: sizer,
				height: sizer
			});

			wall.fitWidth();
		}
	});

	$('#singleContainer').imagesLoaded(function () {
		wall.fitWidth();
	});
	//$(window).trigger("resize");

}

function createSizer() {
	var wi = $(window).width();
 	var sizer;
 	if (wi >= 1024) {
			sizer = wi/3;
	} else if (wi >= 765) {
			sizer = wi/2;
	} else {
		 sizer = wi;
	}
	return sizer;
}
	