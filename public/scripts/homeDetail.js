function navBar(){
  navBarToggle = $('.navBarToggle')
  obj = document.getElementById("navBarLinks")

  $(obj).css('color',"red")
  navBarToggle.toggleClass("active")
  if(obj.style.maxHeight){
    obj.style.maxHeight = null
  } else {
    obj.style.maxHeight = obj.scrollHeight + 'px'
  }
}


function accordianToggle(thing) {
  things = thing.nextElementSibling
  obj = $(thing.nextElementSibling);
  allAcorrdions = $('.accordianContent')
  allAcorrdions.each(function(){
    $(this).css('max-height','0')
  })
  if(things.style.maxHeight >= 20){
    obj.css('max-height','0')
    setTimeout(function(){
      obj.css('border-width','0px')
    },205)
  } else {
    console.log('asdf');
    obj.css('border-width','1px')
    things.style.maxHeight = things.scrollHeight + 'px'
  }
}
