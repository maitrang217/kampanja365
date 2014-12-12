

function fitHeight() {
	var itemWidth_large = $('.brick22').width(),
			itemWidth_small = $('.brick11').width();
	$('.brick22').height(itemWidth_large);
	$('.brick21').height(itemWidth_small);
	$(window).resize(function() {
		var itemWidth_large = $('.brick22').width(),
			itemWidth_small = $('.brick11').width();
		$('.brick22').height(itemWidth_large);
		$('.brick21').height(itemWidth_small);
	});
}

function resizingText() {
	$('.dynamic h1').fitText(0.5, { minFontSize: '78px', maxFontSize: '108px'});
	$('.title h2').fitText(0.5, { minFontSize: '34px', maxFontSize: '44px' });
}

function parallaxScroll() {
	var windowScroll = $(this).scrollTop();
	$('.top-wrapper').css({'top': -(.5 * windowScroll) + 'px'});
	$('.logo').css({'top': -(.5 * windowScroll) + 'px'});
}


function showRegisterForm (screen, item) {
	var formPanelHi;
	switch (screen) {
		case "large" :
			formPanelHi = 550;
			break;
		case "medium" :
			formPanelHi = 686;
			break;
		case "small" :
			formPanelHi = $(window).height();
			break;
	}

		$("#formPanel").toggleClass("shown");

		if($("#formPanel").hasClass('shown')) {
			$("#formPanel").removeClass("hidden");
			$('#formPanel').animate({height: formPanelHi + 'px'}, 300, function () {
				$(this).children(".formContainer").show();
			});
			$(".overlay").animate({ top: (formPanelHi + 38) + 'px' }).fadeIn(200);
			$(item).animate({ marginTop: (formPanelHi + 38) + 'px' });
			$("html, body").css({'overflow': 'hidden'});
			
		} else {
			$("#formPanel").addClass("hidden");
			$('#formPanel').animate({height: 0});
			$(".overlay").animate({ top: '38px' }).hide();
			$(item).animate({ marginTop: 0 });
			$("html, body").css({'overflow': 'scroll'});
		}
}

function close (item) {
	$("a[id^=closePanel]").click(function (e) {
		e.preventDefault();
		var $this = $(this);

			if($this.parent().parent().parent().hasClass('shown')) {
				$this.parent().parent().parent().animate({height: 0});
				$(".overlay").animate({ top: '38px' }).hide();
				$(item).animate({ marginTop: 0 });
				$("html, body").css({'overflow': 'scroll'});
				$this.parent().parent().parent().removeClass('shown');
				$this.parent().parent().parent().addClass('hidden');
			}

		return false;
	});
}


function showPaivaPanel (screen, item) {
	var formPanelHi;
	switch (screen) {
		case "large" :
			formPanelHi = 400;
			break;
		case "medium" :
			formPanelHi = 400;
			break;
		case "small" :
			formPanelHi = $(window).height();
			break;
	}
	if(!$("#paivaPanel").hasClass('shown')) {
			$("#paivaPanel").removeClass("hidden");
			$('#paivaPanel').animate({height: formPanelHi + 'px'}, 300, function () {
				$(this).children('.paivaContainer').show();
			});
			$(".overlay").animate({ top: (formPanelHi + 38) + 'px' }).fadeIn(200);
			$(item).animate({ marginTop: (formPanelHi + 38) + 'px' });
			$("html, body").css({'overflow': 'hidden'})
		} else {
			$("#paivaPanel").addClass("hidden");
			$('#paivaPanel').animate({height: 0});
			$(".overlay").animate({ top: '38px' }).hide();
			$(item).animate({ marginTop: 0 });
			$("html, body").css({'overflow': 'scroll'});
		}

		$("#paivaPanel").toggleClass("shown");
}

