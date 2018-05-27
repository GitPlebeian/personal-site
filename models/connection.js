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

var exports = module.exports = {};

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
	Connection.find({}, function(err, users) {
		console.log(users + 'this is my data')
		return users
	});
}