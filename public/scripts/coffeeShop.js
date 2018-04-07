  var navbarInterval = 0;

  var viewportHeight = $('.intro').outerHeight();
  $('.intro, .paralaxInfo').css({ height: viewportHeight });

  if($(window).width() > 577){
    setTimeout(function() {
      $('.introScrollDownAnimation').animate({
        opacity: '1',
        bottom: '0px'
      }, 800)
    }, 750)
  }
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

  $(window).scroll(function() {
    $('.introScrollDownAnimation').animate({
      opacity: '0.0'
    }, 200)
  })

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

  // Mobile NavBar
mobileActive = false;
$('.mobileNavBarToggleDiv').click(function() {
  mobileActive = !mobileActive
  navbar = $('.mobileNavBar')
  content = $('.content')
  navbar.toggleClass('active')

  if(mobileActive){
    navbar.css('display','block')
    content.animate({
      left: '40%'
    }, 250)

    navbar.animate({
      left: '0'
    }, 220)
  } else {
    content.animate({
      left: '0'
    }, 250)
    navbar.animate({
      left: '-40%'
    }, 250)
    setTimeout(function() {
      navbar.css('display','none')
    },250)
  }

})

$('.content').click(function() {
  if(mobileActive){
    mobileActive = !mobileActive
    navbar = $('.mobileNavBar')
    content = $('.content')
    navbar.toggleClass('active')
    
    content.animate({
      left: '0'
    }, 250)
    navbar.animate({
      left: '-40%'
    }, 250)
    setTimeout(function() {
      navbar.css('display','none')
    },250)
  }
})
