$('.button').click(function() {
	var differentUsers = []
	$.ajax({

		'url': '/trafficData',
		'type': 'GET',
		'success': function(rawData) {
			for (var i = 0; i < rawData.length; i++) {
				console.log('RawDataLoop: ' + i)
				var alreadyInArray = true
				for (var k = 0; k < differentUsers.length; k++) {
					console.log('differentUsers: ' + k)
					console.log(rawData[i].ip)
					console.log(differentUsers[k].ip)

					if (rawData[i].ip == differentUsers[k].ip) {
						console.log('user:' + rawData[i].ip + ' already in array')
						alreadyInArray = false
						differentUsers[k].numTimes += 1
					}
				}
				if (alreadyInArray) {
					differentUsers.push(rawData[i])
				}
			}
			console.log(differentUsers)

		},
		'error': function(request, error) {
			alert("Request: " + JSON.stringify(request));
		}
	});
})