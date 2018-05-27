$('.button').click(function() {
	var differentUsers = []
	$.ajax({

		'url': '/trafficData',
		'type': 'GET',
		'success': function(rawData) {
			$('ul.data').empty()
			for (var i = 0; i < rawData.length; i++) {
				// console.log('RawDataLoop: ' + i)
				var alreadyInArray = true
				for (var k = 0; k < differentUsers.length; k++) {
					// console.log('differentUsersLoop: ' + k)
					// console.log(rawData[i].ip + ' RawData Ip')
					// console.log(differentUsers[k].ip + ' differentUsers Ip')

					if (rawData[i].ip == differentUsers[k].ip) {
						// console.log('user:' + rawData[i].ip + ' already in array')
						alreadyInArray = false
						differentUsers[k].numTimes += 1
					}
				}
				if (alreadyInArray) {
					differentUsers.push(rawData[i])
				}
			}
			var tempUsers = []
			for (var i = 0; i < differentUsers.length; i++) {
				var mostVisits = 0
				var pushToTempIndex = 0
				for (var k = 0; k < differentUsers.length; k++) {
					console.log('User: ' + k + ' user ' + differentUsers[k] + tempUsers.includes(differentUsers[k]))
					if (!tempUsers.includes(differentUsers[k]) && differentUsers[k].numTimes >= mostVisits) {
						pushToTempIndex = k
						mostVisits = differentUsers[k].ip
					}
				}
				console.log('Index to push: ' + pushToTempIndex)
				tempUsers.push(differentUsers[pushToTempIndex])
			}
			// console.log(differentUsers)
			for (var i = 0; i < tempUsers.length; i++) {
				$('ul.data').append('<li>' + tempUsers[i].numTimes + ': ' + tempUsers[i].ip + '</li>')
			}
		},
		'error': function(request, error) {
			alert("Request: " + JSON.stringify(request));
		}
	});
})