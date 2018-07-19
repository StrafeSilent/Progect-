$(document).ready(function() {
	var ourTeamContainer = $('.our-staff');
	  frameSlider = $('.our-staff__container-slider'),
      sliderLine = $('.our-staff__container-slider__slider-line'),
      ctShowSlides = 4;	
    var slide = sliderLine.children().eq(1);
    var circle = $('.our-staff__container-slider__wrapper-circles__circle');

    circle.click(function(){
    	$(this).toggleClass('our-staff__container-slider__wrapper-circles__circle_active');
    	window.scrollTo(0, 200);
    	for(var i = 0; i < circle.size(); i++){
    		if($(this).index() != i){
    			circle.eq(i).attr('class','our-staff__container-slider__wrapper-circles__circle');
    		}
    	}
    });


	setInterval(function() {
	if(window.innerWidth > 1200) {
		ctShowSlides = 4;
	} else if (window.innerWidth <= 980 && window.innerWidth > 860) {
		ctShowSlides = 3;
	} else if (window.innerWidth <= 860 && window.innerWidth > 650) {
		ctShowSlides = 2;
	} else if (window.innerWidth <= 650) {
		ctShowSlides = 1;
	}
	frameSlider.width((slide.width() * ctShowSlides) + slide.css('margin-left').slice(0,-2)*(ctShowSlides-1));
	}, 10);


})