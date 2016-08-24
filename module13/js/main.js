$(document).ready(function() {
  $('header nav ul li').hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this).addClass('animated pulse');
  }, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this).removeClass('animated pulse');
  });




  
});
