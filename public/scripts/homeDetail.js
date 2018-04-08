function navBar(){
  navBarToggle = $('.navBarToggle')
  navBarUL = $('.navBarUL')

  navBarToggle.toggleClass("active")
  navBarUL.toggleClass('active')
}

function imgPullOut(img){
  jimg = $(img)

  jimg.toggleClass("active")
}

function accordianToggle(obj) {
  obj = obj.nextElementSibling;
  if(obj.style.maxHeight){
    obj.style.maxHeight = null
  } else {
    obj.style.maxHeight = obj.scrollHeight + 'px'
  }
}
