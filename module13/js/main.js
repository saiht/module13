$(document).ready(function() {

  $('header nav ul li').hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this).toggleClass('animated pulse');
  });

  $('footer nav a').hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this).addClass('animated swing');
  }, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this).removeClass('animated swing');
  });

  // Ajout/suppression du placeholder
  $('main form input').focus(function(event) {
    /* Act on the event */
    $(this).removeAttr('placeholder');
  });
  $('main form input').blur(function(event) {
    /* Act on the event */
    $(this).attr('placeholder', 'Que recherchez-vous ?');
  });






});
