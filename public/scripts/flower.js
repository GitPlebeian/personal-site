function navBar(navBar) {
    var x = document.getElementById("navBar");
    var y = $('#navBarSlideInid');
    if (x.className === "navBar") {
        x.className += " responsive";
        y.css('display', 'block')
        y.animate({
          top: '52px'
        }, 200)
    } else {
        x.className = "navBar";
        y.animate({
          top: '-68px'
        }, 200)
        setTimeout( function () {
            y.css('display', 'none')
        }, 200);
    }
    navBar.classList.toggle("navIconBarActive");
    y.toggleClass("navBarSlideInActive");
}
function focusContent() {
  var x = document.getElementById("navBar");
  var y = document.getElementById("navBarSlideInid");
  var z = document.getElementById("navIcon");
  if (x.className === "navBar") {

  } else {
      x.className = "navBar";
      z.classList.toggle("navIconBarActive");
      y.classList.toggle("navBarSlideInActive");
  }
}
