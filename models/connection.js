var mongoose = require('mongoose');
var databaseName = 'traffic'
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/' + databaseName);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to database: ' + databaseName)
});

var connectionSchema = mongoose.Schema({
	ip: String
});

var Connection = mongoose.model('Connection', connectionSchema)

exports.saveConnection = function(userIp) {
	var connection = new Connection({
		ip: userIp
	})
	connection.save(function(err, data) {
		if (err) {
			console.log('Save Err: ' + err)
		}

	});
}

exports.getAllConnections = function() {
	var dataStuff
	Connection.find(function(err, data) {
		if (err) {
			console.log(err)
		}
		console.log('asd;lkjr')
		dataStuff = data
	})

	console.log(dataStuff)

	return dataStuff

}