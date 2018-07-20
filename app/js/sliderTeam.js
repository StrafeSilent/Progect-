$(document).ready(function() {
	var ourTeamContainer = $('.our-staff');
	  frameSlider = $('.our-staff__container-slider'),
      sliderLine = $('.our-staff__container-slider__slider-line'),
      ctShowSlides = 4,	
      slide = sliderLine.children().eq(1),
      wrapper_circles = $('.our-staff__wrapper-circles'),
      circle = $('.our-staff__wrapper-circles__circle');
	
	setInterval(function(){
		if(window.innerWidth > 1200) {
			ctShowSlides = 4;
		} else if (window.innerWidth <= 980 && window.innerWidth > 860) {
			ctShowSlides = 3;
		} else if (window.innerWidth <= 860 && window.innerWidth > 650) {
			ctShowSlides = 2
			if(wrapper_circles.children().size() <= 2) {
				circle.eq(ctShowSlides-1).after('<span class="our-staff__wrapper-circles__circle"></span>');
			}
		} else if (window.innerWidth <= 650) {
			ctShowSlides = 1;
		}
		frameSlider.width((slide.width() * ctShowSlides) + slide.css('margin-left').slice(0,-2)*(ctShowSlides-1));
	}, 10);

	wrapper_circles.children().click(function() {

    	$(this).addClass('our-staff__wrapper-circles__circle_active');
    	var offset = 0;
    	if (window.innerWidth < 860) {
    		offset = $(this).index()*((slide.width())+32);
    	}
    	if (window.innerWidth >= 860) {
    		offset = $(this).index()*((slide.width()*3)+96);
    	}
    	if (window.innerWidth >= 980) {
    		offset = $(this).index()*((slide.width()*2)+80);
    	}
		

		sliderLine.css('transform', 'translateX(-'+(offset)+'px)');
    	
    	for(var i = 0; i < circle.size(); i++){
    		if($(this).index() != i){
    			circle.eq(i).attr('class','our-staff__wrapper-circles__circle');
    		}
    	}
	});
});