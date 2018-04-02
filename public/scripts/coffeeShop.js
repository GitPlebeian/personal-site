$(document).ready(function() {
  var navbarInterval = 0;

  var child = 1
  for(var i = 1;i < 8;i++) {
      setTimeout(function() {
        $('.navBarLinkContainer:nth-child(' + child + ')').animate({
          top: '0px',
          height: '70px',
          lineHeight: '70px'
        },860,'easeInOutCubic')
        child++
      },navbarInterval)

      navbarInterval += 100
  }

  $('.navbarLinkMod').mouseenter(function() {
    var p = $('.navBarLinkContainer:nth-child(' + this.getAttribute("child") + ') p')


    $(this).css('border-radius','0 4px 4px 0')
    $(this).animate({
      width: '77px'
    },80)

    p.css('display','block')
    p.animate({
      left: '83px'
    },100,'easeInOutQuad')
  })

  $('.navbarLinkMod').mouseleave(function() {
    var p = $('.navBarLinkContainer:nth-child(' + this.getAttribute("child") + ') p')
    $(this).css('border-radius','0px')
    $(this).animate({
      width: '70px'
    },80)

    p.animate({
         left: '-20px'
    },100,)
  })

  // $('.navBarLinkContainer').mouseenter(function() {
  //   var p = $('.' + this.className + " p")
  //
  //   p.css('display','block')
  //   p.animate({
  //     left: '83px'
  //   },100,'easeOutBack')
  // })
  // $('.navBarLinkContainer').mouseleave(function() {
  //   var p = $('.' + this.className + " p")
  //
  //   p.animate({
  //     left: '0px'
  //   },100,'easeInOutCubic')
  //
  // })
})
