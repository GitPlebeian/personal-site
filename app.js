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

sgMail.setApiKey(apiKey());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("homepage");
});

app.get("/websites", function(req,res){
	res.render("websites");
});
app.get("/contact", function(req,res){
	res.render("contact");
});
app.post("/contact", function(req,res){
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
app.get("/websites/flower", function(req,res){
	res.render("websites/flower.ejs");
});
app.get("/websites/glass", function(req,res){
	res.render("websites/glass.ejs");
});

server = http.createServer(options, app)
io = require('socket.io').listen(server)
server.listen(443)
