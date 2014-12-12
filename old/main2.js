$(window).load(function() {

	fitHeight();
	loadItems();
	singlePageMasonry();

	// Show/Hide register form
	$('#registerBtn').click(function (e) {
		if($("#paivaPanel").hasClass('shown')) {
			e.preventDefault();
		} else {
			showRegisterForm();
		}
			
		return false;
	});

	$('#paivaBtn').click(function (e) {		
		if($("#formPanel").hasClass('shown')) {
			e.preventDefault();
		} else {
			showPaivaPanel();
		}
			
		return false;
	});

	close();
	

	//Remove fixed footer when the site is loaded
	if ($("footer").hasClass('fixed')) {
		$("footer").removeClass('fixed');
	}
		

});

function fitHeight() {
	var itemWidth_large = $('.w2').width(),
			itemWidth_small = $('.item:not(.w2)').width();
	$('.h2').height(itemWidth_large);
	$('.h1').height(itemWidth_small);

	$(window).resize(function() {
		var itemWidth_large = $('.w2').width(),
			itemWidth_small = $('.item:not(.w2)').width();
		$('.h2').height(itemWidth_large);
		$('.h1').height(itemWidth_small);
	});
}

function parallaxScroll() {
	var windowScroll = $(this).scrollTop();
	$('.top-wrapper').css({'top': -(.5 * windowScroll) + 'px'});
	$('.logo').css({'top': -(.5 * windowScroll) + 'px'});
}


function loadItems() {

	var $container = $('#container');

	//Check for IE9
	if ($('html').hasClass('ie9')) {
		$('.grid-sizer').css('width', $(window).width() / 6);
		$('.item').css('width', $(window).width() / 6);
		$('.item.w2').css('width', $(window).width() / 3);

	}

	$container.imagesLoaded(function() {
		$('.item').animate({opacity: 1});
		$container.masonry({
			itemSelector: '.item',
		 	columnWidth: '.grid-sizer'
		});
	});
	

	lazyLoad();

}

function lazyLoad() {
	var isload = true;
	var $container = $('#container');
	var page = $('.nextPage').val();

	$(window).scroll(function () {

		if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
		 	$.ajax({
			 		url:"more.php",
			 		type:"POST",
			 		data:"p="+ page,
			 		cache: false,
			 		success: function(response){
			 			$('.nextPage').remove();
					 	$('#container').append(response);
					 	fitHeight();

					 	//Check for IE9
						if ($('html').hasClass('ie9')) {
							$('.grid-sizer').css('width', $(window).width() / 6);
							$('.item').css('width', $(window).width() / 6);
							$('.item.w2').css('width', $(window).width() / 3);
						}

							$container.imagesLoaded(function () {	
								$container.masonry('reloadItems').masonry();			
							});

						// Delay while re-arranging items
						$('.item').delay(400).animate({ opacity:1 });
					}
				});
			page++;	
		 }
	}); 
}

function showRegisterForm () {

		if(!$("#formPanel").hasClass('shown')) {
			$('#formPanel').animate({height: '550px'}, 40);
			$(".overlay").show().animate({ top: '588px' });
			$("#container").animate({ marginTop: '588px' });
			$("#singleContainer").animate({ marginTop: '588px' });
			$("body").css({'overflow': 'hidden'})
		} else {
			$('#formPanel').animate({height: 0}, 40);
			$(".overlay").animate({ top: '38px' }).hide();
			$("#container").animate({ marginTop: 0 });
			$("#singleContainer").animate({ marginTop: 0 });
			$("body").css({'overflow': 'scroll'});
		}

		$("#formPanel").toggleClass("shown");
}

function close () {
	$("a[id^=closePanel]").click(function (e) {
		e.preventDefault();
		var $this = $(this);

			if($this.parent().parent().parent().hasClass('shown')) {
				$this.parent().parent().parent().animate({height: 0}, 40);
				$(".overlay").animate({ top: '38px' }).hide();
				$("#container").animate({ marginTop: 0 });
				$("#singleContainer").animate({ marginTop: 0 });
				$("body").css({'overflow': 'scroll'});
				$this.parent().parent().parent().removeClass('shown');
			}

		return false;
	});
}

function singlePageMasonry() {
	var $container = $('#singleContainer');

	$container.imagesLoaded(function() {
		$('.item').animate({opacity: 1});
		$container.masonry({
			itemSelector: '.item',
		 	columnWidth: '.grid-sizer'
		});
	});

	fitHeight();
}

function showPaivaPanel() {
	if(!$("#paivaPanel").hasClass('shown')) {
			$('#paivaPanel').animate({height: '320px'}, 40);
			$(".overlay").show().animate({ top: '358px' });
			$("#container").animate({ marginTop: '358px' });
			$("#singleContainer").animate({ marginTop: '358px' });
			$("body").css({'overflow': 'hidden'})
		} else {
			$('#paivaPanel').animate({height: 0}, 40);
			$(".overlay").animate({ top: '38px' }).hide();
			$("#container").animate({ marginTop: 0 });
			$("#singleContainer").animate({ marginTop: 0 });
			$("body").css({'overflow': 'scroll'});
		}

		$("#paivaPanel").toggleClass("shown");
}
