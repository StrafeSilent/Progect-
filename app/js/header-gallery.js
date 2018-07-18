$(document).ready(function(){
	var btn_arrow_left = $('.header-page__header-middle__arrow-left'),
		btn_arrow_right = $('.header-page__header-middle__arrow-right'),
		circles = $('.header-page__header-middle__wrapper-circles').children(),
		slides = $('.header-page__header-middle__slide');
	var cur_index_of_slide = 0,
		is_auto_slide = true;
	

	function toSlide(){
		for(var i = 0; i < circles.size(); i++){
			circles.eq(i).attr('class','header-page__header-middle__wrapper-circles__circle');
			slides.eq(i).attr('class', 'header-page__header-middle__slide');
		}
		circles.eq(cur_index_of_slide).toggleClass('animated rubberBand header-page__header-middle__wrapper-circles__circle_active');
		slides.eq(cur_index_of_slide).toggleClass('header-page__header-middle__slide_slide_active');
	}

	function pauseSlide(time) {
		setTimeout(function(){
			is_auto_slide = true;
		}, time)
	}

	setInterval(function(){
		if(is_auto_slide) {
			if(cur_index_of_slide + 1 != circles.size()){
				cur_index_of_slide++;
			} else if(cur_index_of_slide + 1 == circles.size()){
				cur_index_of_slide = 0;
			}
			toSlide();
		} else {
			return;
		}
	}, 4500);

	btn_arrow_left.on('click', function(){
		if(cur_index_of_slide - 1 >= 0){
			cur_index_of_slide--;
		} else if(cur_index_of_slide - 1 < 0){
			cur_index_of_slide = circles.size()-1;
		}
		is_auto_slide = false;
		pauseSlide(5000);
		toSlide();
	});
	btn_arrow_right.on('click', function(){
		if(cur_index_of_slide + 1 != circles.size()){
			cur_index_of_slide++;
		} else if(cur_index_of_slide + 1 == circles.size()){
			cur_index_of_slide = 0;
		}
		is_auto_slide = false;
		pauseSlide(5000);
		toSlide();
	});

	circles.on('click', function(){
		cur_index_of_slide = $(this).index();
		is_auto_slide = false;
		pauseSlide(5000);
		toSlide();
	});

});