$(document).ready(function() {
     $('.accord').on('click', function() {
      $('.acc').not($(this).next()).slideUp(200);
    $(this).next().toggle(120);
     });
});