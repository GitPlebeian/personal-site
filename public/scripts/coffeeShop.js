  var navbarInterval = 0;

  var child = 1
  for(var i = 1;i < 8;i++) {
      setTimeout(function() {
        $('.navBarLinkContainer:nth-child(' + child + ')').animate({
          top: '0px',
          height: '60px',
          lineHeight: '60px'
        },600,'easeInOutCubic')
        child++
      },navbarInterval)

      navbarInterval += 90
  }

  setTimeout(function() {
    $('head').append('<style>.introText p:before{width:100%;}</style>');
  }, 200)


  $('.navbarLinkMod').mouseenter(function() {
    var p = $('.navBarLinkContainer:nth-child(' + this.getAttribute("child") + ') p')


    $(this).css('border-radius','0 4px 4px 0')
    $(this).animate({
      width: '67px'
    },80)

    p.css('display','block')
    p.animate({
      left: '74px'
    },90)
  })

  $('.navbarLinkMod').mouseleave(function() {
    var p = $('.navBarLinkContainer:nth-child(' + this.getAttribute("child") + ') p')
    $(this).css('border-radius','0px')
    $(this).animate({
      width: '60px'
    },80)

    p.animate({
         left: '-18px'
    },90)
  })
  $('.navbarLinkMod').mousedown(function() {
    var p = $('.navBarLinkContainer:nth-child(' + this.getAttribute("child") + ') p')
    $(this).animate({
      width: '72px'
    },50)

    p.animate({
         left: '84px'
    },50)
  })
  $('.navbarLinkMod').mouseup(function() {
    var p = $('.navBarLinkContainer:nth-child(' + this.getAttribute("child") + ') p')
    $(this).animate({
      width: '67px'
    },50)

    p.animate({
         left: '74px'
    },50)
  })
