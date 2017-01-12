$(document).ready(function(){
	$(window).scroll(function(){
		var pre=$(window).scrollTop();
		var opac=(300-pre)/300;
		
		$('#page_title').css('opacity',opac);
	})



});