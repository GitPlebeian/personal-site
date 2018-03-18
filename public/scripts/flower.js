function navBar(navBar) {
    var x = document.getElementById("navBar");
    var y = document.getElementById("navBarSlideInid");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
    navBar.classList.toggle("navIconBarActive");
    y.classList.toggle("navBarSlideInActive");
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
