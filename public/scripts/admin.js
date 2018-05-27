$('.button').click(function() {
	$.ajax({

		'url': '/trafficData',
		'type': 'GET',
		'success': function(data) {
			$('p.data').html(data + " asd;lrj");

		},
		'error': function(request, error) {
			alert("Request: " + JSON.stringify(request));
		}
	});
})