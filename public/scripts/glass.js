$("body").scroll(function() {
  scrollFunction();
});

function scrollFunction() {
  if ($("body").width() < 577 && document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $(".scrollTop").css("opacity","1");
  } else {
    $(".scrollTop").css("opacity","0");
  }
}

function fucntioning() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
