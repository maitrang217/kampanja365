jQuery(function($) {
	var $window = $(window),
	    previousDimensions = {
	        width: $window.width(),
	        height: $window.height()
	    };

	$(window).resize(function () {

			$('html, body').hide().fadeIn(400);

			var sizer = createSizer();
			var wall = new freewall("#container");
			createFreeWall(wall, false);
			fitHeight();

			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			 	window.location.reload();
			}

	});
});

$(window).load(function() {
	$('html, body').fadeIn(400);

	fitHeight();
	loadItems();

	var windowW = $(window).width();
	// Show/Hide register form for target screen
	$('#registerBtn').click(function (e) {
		$("#formPanel").removeClass('hidden');

		if($("#paivaPanel").hasClass('shown')) {
			e.preventDefault();
		} else {
			if (windowW > 800) {
				showRegisterForm("large", "#container");
			} else if (windowW > 500) {
				showRegisterForm("medium", "#container");
			} else {
				showRegisterForm("small", "#container");
			}	
		}
		return false;
	});

	$('a[id^=paivaBtn]').click(function (e) {		
		if($("#formPanel").hasClass('shown')) {
			e.preventDefault();
		} else {
			if (windowW > 800) {
				showPaivaPanel("large", "#container");
			} else if (windowW > 500) {
				showPaivaPanel("medium", "#container");
			} else {
				showPaivaPanel("small", "#container");
			}	
		}
			
		return false;
	});

	close("#container");

		
	resizingText();
});

function loadItems() {

	$('.dynamic').animate({'opacity': 1});

	var wall = new freewall("#container");
	createFreeWall(wall, true);

	wall.container.find(".item").each(function() {
		var $item = $(this);
		$item.attr({
			"data-class": $item.attr("class"),
			"data-style": $item.attr("style")
		});
	});

	lazyLoad();
}

function createFreeWall(wall, animate) {
	var sizer = createSizer();

	var item1 = $('.brick11'),
			item2 = $('.brick22'),
			item3 = $('.brick21');
	item1.css({'width': sizer + 'px', 'height': sizer + 'px'});
	item2.css({'width': sizer*2 + 'px', 'height': sizer*2 + 'px'});
	item3.css({'width': sizer*2 + 'px', 'height': sizer + 'px'});
	wall.reset({
		selector: '.item',
		animate: animate,
		cellW: sizer,
		cellH: sizer,
		gutterX : 0,
		gutterY: 0,
		onResize: function() {
			wall.fitWidth();
		},
		onBlockActive: function () {
			$(".loading").show();
		},
		onBlockFinish: function () {
			$(".loading").hide();
		}
	});

	$('div[id=container]').imagesLoaded(function (instance) {
		wall.fitWidth();
	});
}

function lazyLoad() {
	var isload = true;
	var $container = $('#container:not(.no-lazyload)');
	var page = $(".nextPage").val();

	$(window).scroll(function () {

		if ($(document).height() == $(window).scrollTop() + $(window).height()) {
		 	$.ajax({
			 		url:"more.php",
			 		type:"POST",
			 		data:"p="+ page,
			 		beforeSend: function(){
			 			if( typeof($('.nextPage').val()) != "undefined" ) {
			 				$(".loading").show();
			 			}
			    },
			 		success: function(response){
			 			//Remove fixed footer when the site is loaded
						if ($("footer").hasClass('fixed')) {
							$("footer").removeClass('fixed');
						}


			 			var wall = new freewall("#container");
			 			$(response).each(function(index) {
			 				$(this).hide().delay(100*index).fadeIn(400);
			 				wall.appendBlock(this);
			 			});
			 			$('.nextPage').remove();

					 	fitHeight();

						createFreeWall(wall, false);
					
						page++;
					},
					complete: function() {
						$(".loading").hide();
					}
				});
		 }
	}); 
}

function createSizer() {
	var wi = $(window).width();
 	var sizer;
 	if (wi > 1024) {
			sizer = wi/6;
	} else if (wi > 600) {
			sizer = wi/4;
	} else {
		 sizer = wi/2;
	}
	return sizer;
}

