express = require('express');
app = express();
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');
var apiKey = require('./apikey.js')

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

var connectionModel = require('./models/connection.js')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to database: ' + databaseName)
});


sgMail.setApiKey(apiKey());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {


	newConnection.save(function(err, newConnection) {
		if (err) return console.error(err);

	});

	Connection.find(function(err, Connections) {
		if (err) return console.error(err);
		console.log(Connections);
	})

	// Kitten.find({
	// 	name: /^Silence/
	// }, function(err, data) {
	// 	if (err) {
	// 		console.log(err)
	// 	}
	// 	console.log(data)
	// });
	res.render("homepage");
});

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