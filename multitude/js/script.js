$(window).load(function(){



	// on hover effects
	$('.c_overlay').mouseover(function(){
		$(this).siblings().css("-webkit-transform","scale(1.2)");
		$(this).siblings().css("transform","scale(1.2)");
		$(this).siblings().css("-moz-transform","scale(1.2)");
		$(this).siblings().css("-o-transform","scale(1.2)");
	});

	$('.c_overlay').mouseout(function(){
		$(this).siblings().css("-webkit-transform","scale(1)");
		$(this).siblings().css("transform","scale(1)");
		$(this).siblings().css("-moz-transform","scale(1)");
		$(this).siblings().css("-o-transform","scale(1)");
	});

	//scroller
	$(".nano").nanoScroller();


	// thumbs navigation
	$('.t_overlay').eq(0).click(function(){
		$('.viewer').animate({scrollLeft:0},1800,'easeInQuad');
	});

	$('.t_overlay').eq(1).click(function(){
		$('.viewer').animate({scrollLeft:1000},1800,'easeInQuad');
	});

	$('.t_overlay').eq(2).click(function(){
		$('.viewer').animate({scrollLeft:2000},1800,'easeInQuad');
	});

	$('.t_overlay').eq(3).click(function(){
		$('.viewer').animate({scrollLeft:3000},1800,'easeInQuad');
	});

	$('.t_overlay').eq(4).click(function(){
		$('.viewer').animate({scrollLeft:4000},1800,'easeInQuad');
	});

	$('.t_overlay').eq(5).click(function(){
		$('.viewer').animate({scrollLeft:5000},1800,'easeInQuad');
	});

	$('.t_overlay').eq(6).click(function(){
		$('.viewer').animate({scrollLeft:6000},1800,'easeInQuad');
	});

});