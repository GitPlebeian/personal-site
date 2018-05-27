express = require('express');
app = express();
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');
var apiKey = require('./apikey.js')
const requestIp = require('request-ip');

var http = require('https')
var fs = require('fs')

var sslPath = '/etc/letsencrypt/live/www.jaxtubbs.site/'

var options = {
	key: fs.readFileSync(sslPath + 'privkey.pem'),
	cert: fs.readFileSync(sslPath + 'fullchain.pem')
}

var databaseName = 'traffic'
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/' + databaseName);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to database: ' + databaseName)
});

var connectionSchema = mongoose.Schema({
	ip: String,
	numTimes: 0
});

var Connection = mongoose.model('Connection', connectionSchema)


sgMail.setApiKey(apiKey());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	str = requestIp.getClientIp(req)
	newIp = str.slice(7, str.length)
	var connection = new Connection({
		ip: newIp,
		numTimes: 0
	})
	connection.save(function(err, data) {
		if (err) {
			console.log('Save Err: ' + err)
		}

	});

	res.render("homepage");
});
app.get("/traffic", function(req, res) {
	if (true) {
		res.render('admin');
	}
});
app.get('/trafficData', function(req, res) {
	Connection.find({}, function(err, users) {
		res.send(users)
	});
})


app.get("/skills", function(req, res) {
	res.render("skills");
});
app.get("/contact", function(req, res) {
	res.render("contact");
});
app.get("/services", function(req, res) {
	res.render("services");
});
app.post("/contact", function(req, res) {
	console.log("Sending Email");
	const msg = {
		to: 'jaxtubbs@gmail.com',
		from: 'ClientBot@gmail.com',
		subject: 'From: ' + req.body.email,
		text: '' + req.body.message,
		html: req.body.subject + '<br>' + '<p>' + req.body.message + '</p>',
	};
	console.log("Email:" + msg);
	sgMail.send(msg);
	res.redirect('/');
});

server = http.createServer(options, app)
io = require('socket.io').listen(server)
server.listen(443)