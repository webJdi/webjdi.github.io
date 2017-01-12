$(window).load(function(){
	setInterval(function(){
		/*$('.slidebox:first').css("transform","translateX(1800px)");
		$('.slidebox:first').css("-webkit-transform","translateX(1800px)");
		$('.slidebox:first').css("-moz-transform","translateX(1800px)");
		$('.slidebox:first').css("-o-transform","translateX(1800px)"); */
		var entity=$('.slideboximg:last');
		entity.css("transform","translateX(2000px)");
		entity.css("-webkit-transform","translateX(2000px)");
		entity.css("-moz-transform","translateX(2000px)");
		entity.css("-o-transform","translateX(2000px)");
		entity.fadeOut('fast',function(){
			$(this).remove();
		});
		var src=entity.attr("src");
		$('.slidebox:first').prepend("<img class='slideboximg' src='"+src+"' >");


	},8000);


	skel.init();

	$('.btnbg').mouseover(function(){
		$(this).siblings().css("-webkit-transform","scale(1.1)");
		$(this).siblings().css("-moz-transform","scale(1.1)");
		$(this).siblings().css("-o-transform","scale(1.1)");
		$(this).siblings().css("transform","scale(1.1)");
	});

	$('.btnbg').mouseout(function(){
		$(this).siblings().css("-webkit-transform","scale(1)");
		$(this).siblings().css("-moz-transform","scale(1)");
		$(this).siblings().css("-o-transform","scale(1)");
		$(this).siblings().css("transform","scale(1)");
	});




});
