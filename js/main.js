$(document).ready(function() {

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
	
	$.getJSON( "js/data.json", function( data ) {
		var items = [];
		var captions = [];
	  $.each(data, function(key, val) {
	  	var imageUrl = "images/" + val.image;
	  	items.push(imageUrl);
	  	captions.push(val.caption);
	  });

	 $('.item:not(.w2)').each(function(index) {
	 		$(this).css({'background' : 'url("'+ items[index] +'") top left no-repeat', 'background-size':'cover'});
	 		$(this).append('<div class="caption">' + captions[index] + '</div>');
	 });
	});
	

	$('.item').mouseenter(function(event) {
		$(this).children('.caption').css('padding-top', '10px').animate({height: 60}, 300);
	});
	$('.item').mouseleave(function(event) {
		$(this).children('.caption').animate({height: 0}, 300).css('padding-top', '0px');
	});
	
	$('#container').masonry({
	  itemSelector: '.item'
	});

});