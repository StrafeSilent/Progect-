$(document).ready(function() {
	var ourTeamContainer = $('.our-staff');
	  frameSlider = $('.our-staff__container-slider'),
      sliderLine = $('.our-staff__container-slider__slider-line'),
      ctShowSlides = 4;	
    var slide = sliderLine.children().eq(1);
    var wrapper_circles = $('.our-staff__wrapper-circles');
    var circle = $('.our-staff__wrapper-circles__circle');

			ctShowSlides = 4;
	setInterval(function(){
		if(window.innerWidth > 1200) {
		} else if (window.innerWidth <= 980 && window.innerWidth > 860) {
			ctShowSlides = 3;
		} else if (window.innerWidth <= 860 && window.innerWidth > 650) {
			ctShowSlides = 2
			if(wrapper_circles.children().size() <= 2) {
				circle.eq(ctShowSlides-1).after('<span class="our-staff__wrapper-circles__circle"></span>');
				alert(circle.size());
			}
		} else if (window.innerWidth <= 650) {
			ctShowSlides = 1;
		}
		frameSlider.width((slide.width() * ctShowSlides) + slide.css('margin-left').slice(0,-2)*(ctShowSlides-1));
	}, 1);
		wrapper_circles.children().click(function(){
			alert($(this).index());
	    	$(this).addClass('our-staff__wrapper-circles__circle_active');
	    	var offset = $(this).index()*(6-ctShowSlides)*slide.width()*1.13;
	    	alert(offset + " : " + sliderLine.width() + " : " + $(this).index());
	  	 	if(offset <= sliderLine.width()) {
	    		sliderLine.css('transform', 'translateX(-'+(offset)+'px)');
	    	}

	    	for(var i = 0; i < circle.size(); i++){
	    		if($(this).index() != i){
	    			circle.eq(i).attr('class','our-staff__wrapper-circles__circle');
	    		}
	    	}
    	});

})