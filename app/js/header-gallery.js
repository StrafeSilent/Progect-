window.onload = function(){
	var btn_arrow_left = document.querySelector('.header-page__header-middle__arrow-left'),
		btn_arrow_right = document.querySelector('.header-page__header-middle__arrow-right'),
		circles = document.querySelectorAll('.header-page__header-middle__wrapper-circles');
	btn_arrow_left.onclick = function(){
		var elem = $('.header-page__header-top__main-menu');
		alert(elem);
	}
}