$('document').ready(function(){
    $('input[type="text"], input[type="email"], textarea').focus(function(){
      var background = $(this).attr('id');
      $('#' + background + '-form').addClass('formgroup-active');
      $('#' + background + '-form').removeClass('formgroup-error');
    });
    $('input[type="text"], input[type="email"], textarea').blur(function(){
      var background = $(this).attr('id');
      $('#' + background + '-form').removeClass('formgroup-active');
    });
  
  function errorfield(field){
    $(field).addClass('formgroup-error');
    console.log(field); 
  }