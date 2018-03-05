
$(document).ready(function() {
  // $("#intro").mouseout(function() {
  //   $(this).animate({
  //     borderLeftWidth: '0px',
  //     borderBottomWidth: '0px'
  //     // outlineColor: '#f37736'
  //   }, 300);
  // });
  $("#intro").mouseenter(function() {
    $(this).animate({
      outlineLeftWidth: '3px',
      outlineBottomWidth: '3px'
      // outlineColor: '#f37736'
    }, 300);
    console.log("yourMOm")
  });
});
