setTimeout(function(){
  setTimeout(function(){
    $('.fullcover p:nth-child(1)').toggleClass('active')
  },0)
  setTimeout(function(){
    $('.fullcover p:nth-child(1)').toggleClass('active2')
  },75)

  setTimeout(function(){
    $('.fullcover p:nth-child(2)').toggleClass('active')
  },200)
  setTimeout(function(){
    $('.fullcover p:nth-child(2)').toggleClass('active2')
  },275)

  setTimeout(function(){
    $('.fullcover p:nth-child(3)').toggleClass('active')
  },400)
  setTimeout(function(){
    $('.fullcover p:nth-child(3)').toggleClass('active2')
  },475)

  setTimeout(function(){
    $('.fullcover p:nth-child(4)').toggleClass('active')
  },600)
  setTimeout(function(){
    $('.fullcover p:nth-child(4)').toggleClass('active2')
  },675)

  setTimeout(function(){
    $('.fullcover p:nth-child(5)').toggleClass('active')
  },800)
  setTimeout(function(){
    $('.fullcover p:nth-child(5)').toggleClass('active2')
  },875)
},500)




function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
