$(document).ready(function() {
     $('.accord').on('click', function() {
      $('.acc').not($(this).next()).slideUp(100);
      $(this).next().slideToggle(120);
      $(this).find('.icon1').toggleClass('fa-rotate-270');
     });
});