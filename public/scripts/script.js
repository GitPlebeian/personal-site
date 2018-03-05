function navIconClick() {
  console.log("asdfrr");
    var x = document.getElementById("navBar");
    if (x.className === "navBar primary-background white") {
        x.className += " responsive";
    } else {
        x.className = "navBar primary-background white";
    }
}
function focusContent() {
    var x = document.getElementById("navBar");
    if (x.className !== "navBar primary-background white") {
        x.className = "navBar primary-background white";
    }
}
