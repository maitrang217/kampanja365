$(document).ready(function() {

	$('#container').masonry({
	  itemSelector: '.item'
	});
	loadItems();

	var wi = $(window).width();
	var divHeight = $('.item:not(.w2)').width();
	$('.item:not(.w2)').height(divHeight);
	$('.w2').height( 2 * divHeight );

	if( wi < 500 ) {
		$('.item:nth-child(3)').insertBefore('.w2');
	}

	$(window).resize(function() {
		var wi = $(window).width();

		var divHeight = $('.item:not(.w2)').width();
		$('.item:not(.w2)').height(divHeight);
		$('.w2').height( 2 * divHeight );

		if( wi < 500 ) {
			$('.item:nth-child(3)').insertBefore('.w2');
			window.location = window.location;
		}
	});
	

	$('.item').mouseenter(function(event) {
		$(this).children('.caption').css('padding-top', '10px').animate({height: 60}, 300);
	});
	$('.item').mouseleave(function(event) {
		$(this).children('.caption').animate({height: 0}, 300).css('padding-top', '0px');
	});


	$(window).bind('scroll', function() {
		parallaxScroll();
	});

});

function parallaxScroll() {
		var windowScroll = $(this).scrollTop();
		$('.top-wrapper').css({'top': -(.5 * windowScroll) + 'px'});
		$('.logo').css({'top': -(.5 * windowScroll) + 'px'})
}

function loadItems() {
	$.getJSON( "js/data.json", function( data ) {
		var items = [];
		var captions = [];
	  $.each(data, function(key, val) {
	  	var imageUrl = "images/" + val.image;
	  	items.push(imageUrl);
	  	captions.push(val.caption);
	  });

	 $('.item:not(.w2)').each(function(index) {
	 		//$(this).css({'background' : 'url("'+ items[index] +'") top left no-repeat', 'background-size':'cover'});
	 		$(this).append('<img src="' + items[index] + '" alt="" width="100%" height="100%">')
	 		$(this).append('<div class="caption">' + captions[index] + '</div>');
	 });
	});

	$('#container').imagesLoaded(function() {
		var item = $('div.item')
		$('#container').masonry('appended', item);
	});
}