///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////// NavStick.js /////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

function navStick(target) {
	var x=document.getElementById(target);
	window.onScroll=function(){
		var offset=x.offsetTop();
		if (offset<=0) {
			x.className=x.className+" Stuck";
			alert();
		}
		else if (offset>0) {
			x.className=x.className.replace(/\bStuck\b/,'');
		}
	};
	

};