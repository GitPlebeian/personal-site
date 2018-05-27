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

var Connection = mognooose.model('Connection', connectionSchema)