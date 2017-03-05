window.onload = function(){
	

	window.onscroll = function(){

	wScroll = document.body.scrollTop;


	var windowTop = document.getElementById('colorChange');


	function colorFunction(){
		if(wScroll >= 0 && wScroll < 400) {
		windowTop.style.backgroundColor = "#39f";
		} else if (wScroll >= 400 && wScroll < 1166) {
			windowTop.style.backgroundColor = "#ff351a";
		} else if (wScroll >= 1166 && wScroll < 1910) {
			windowTop.style.backgroundColor = "#222222";
		} else if (wScroll >= 1910 && wScroll < 2666) {
			windowTop.style.backgroundColor = "#ffdd33";
		} else if (wScroll >= 2666 && wScroll < 3397) {
			windowTop.style.backgroundColor = "#417aba";
		} else if (wScroll >= 3397 && wScroll < 4180) {
			windowTop.style.backgroundColor = "#4444f6";
		} else if (wScroll >= 4180 && wScroll < 4880) {
			windowTop.style.backgroundColor = "#f7d693";
		} else if (wScroll >= 4880) {
			windowTop.style.backgroundColor = "#f2f2f2";
		}
	};
	

	colorFunction();

	};
		
};