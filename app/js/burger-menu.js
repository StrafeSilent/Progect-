$(document).ready(function(){
	let btn_burger = $('.header-page__header-top__toggle-menu__btn-burger');
	btn_burger.on('click', function(){
		var menu = $('.header-page__header-top__toggle-menu__menu');
		menu.toggleClass('animated slideInRight header-page__header-top__toggle-menu__menu_active');
	});
})