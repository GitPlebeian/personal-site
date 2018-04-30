$(window).scroll(function() {

  if($(window).scrollTop() > 72){
    $('.header h1').addClass('scrolled')
  } else {
    $('.header h1').removeClass('scrolled')
  }

  if($(window).scrollTop() > 10){
  }
})
