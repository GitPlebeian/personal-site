$('.button').click(function() {
	$.ajax({

		'url': '/trafficData',
		'type': 'GET',
		'success': function(data) {
			console.log(data)
			$('p.data').html(data + " Is Data");

		},
		'error': function(request, error) {
			alert("Request: " + JSON.stringify(request));
		}
	});
})