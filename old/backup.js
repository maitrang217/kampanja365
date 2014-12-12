$(window).load(function() {

	loadItems();

	$('#registerBtn').click(function (e) {
		e.preventDefault();
		showRegisterForm();
		return false;
	});

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

function lazyLoading(data) {

	var $container = $('#container'),
			startIndex = 16,
			endIndex = data.length,
			loading = false,
			numberOfImage = 14,
			items = [],
			fragment = $(document.createDocumentFragment());

	$(window).scroll(function () {

    	if ($(document).height() <= $(window).scrollTop() + $(window).height()) {

    		if ( startIndex < endIndex  && loading === false) {
    			numberOfImage = ((endIndex - startIndex) < numberOfImage) ? (endIndex - startIndex) : numberOfImage;
    			loading = true;
    		
	        for ( var i = startIndex; i < (startIndex + numberOfImage); i++ ) {
						var item = createItem(data[i]);
						items.push(item);
						fragment.append(item);
					}
							
					$container.append(fragment);

					//Check for IE9
					if ($('html').hasClass('ie9')) {
						$('.item').css('width', $(window).width() / 6);
						$('.item.w2').css('width', $(window).width() / 3);
					}

					fitHeight();
					fragment.imagesLoaded(function () {	
						$container.masonry('reloadItems').masonry();			
					});

					// Delay while re-arranging items
					$('.item').delay(400).animate({ opacity:1 });

					startIndex += numberOfImage;
					loading = false;
				}
    }

 });
}


function loadItems() {

	var $container = $('#container');

	$.getJSON("js/data.json?v=2.0", function (data) {

		var items = [],
				captions = [];

		// Load first 12 items
		for ( var i = 0, len = 15; i < len; i++ ) {
			var item = createItem(data[i]);
			items.push(item);
			$container.append(item);
		}

		//Check for IE9
		if ($('html').hasClass('ie9')) {
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

		lazyLoading(data);
		fitHeight();
		
	});

}


function createItem(data) {
	var item = '';
	if( data.image != '' && data.caption != '') {
		item = '<div class="' + data.className + '">' + 
		'<img src="images/' + data.image + '" alt="" width="100%" height="100%" />' +
		'<div class="caption">' + data.caption + '</div></div>';
	} else {
		item = '<div class="' + data.className + '">' + data.content+ '</div>';
	}
	return item;
}

function showRegisterForm() {

		if(!$("#formPanel").hasClass('shown')) {
			$('#formPanel').animate({height: '550px'}, 40);
			$(".overlay").show().animate({ top: '588px' });
			$("#container").animate({ marginTop: '588px' });
			$("body").css({'overflow': 'hidden'})
		} else {
			$('#formPanel').animate({height: 0}, 40);
			$(".overlay").animate({ top: '38px' }).hide();
			$("#container").animate({ marginTop: 0 });
			$("body").css({'overflow': 'scroll'})
		}

		$("#formPanel").toggleClass("shown");
}
