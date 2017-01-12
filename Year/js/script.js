$(document).ready(function(){


	var n=100; // number of bloks 
	var target=$('#bloks');
	var bullet="<div class='blok'></div>";
	for (var i =1; i <= n; i++) {
	 	target.append(bullet);
	 }; 


});