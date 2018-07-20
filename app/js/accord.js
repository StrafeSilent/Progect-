$(document).ready(function() {
     $('.accord').on('click', function() { 
        $('.acc').not($(this).next()).slideUp(100);
           $(this).next().slideToggle(120); 
        $('.icon1').removeClass('fa-rotate-270');
     $(this).find('.icon1').toggleClass('fa-rotate-270');
     });


     $('.rand1').on('click', function() { 
        $('.blocker2, .blocker3, .blocker4').not($(this).find('.blocker')).hide(100);
       $('.blocker1').fadeIn(120); 
     });
     $('.rand2').on('click', function() { 
        $('.blocker1,  .blocker3, .blocker4').not($(this).find('.blocker')).hide(100);
       $('.blocker2').fadeIn(120); 
     });
     $('.rand3').on('click', function() { 
        $('.blocker1, .blocker2, .blocker4').not($(this).find('.blocker')).hide(100);
       $('.blocker3').fadeIn(120); 
     });
     $('.rand4').on('click', function() { 
        $('.blocker1, .blocker2, .blocker3').not($(this).find('.blocker')).hide(100);
       $('.blocker4').fadeIn(120); 
     });
});