express = require('express');
app = express();
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey("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");

var http = require('https')
var fs = require('fs')

var sslPath = '/etc/letsencrypt/live/www.jaxtubbs.site/'

var options = {
	key: fs.readFileSync(sslPath + 'privkey.pem'),
	cert: fs.readFileSync(sslPath + 'fullchain.pem')
}
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
	from: '' + req.body.email,
	subject: '' + req.body.subject,
	text: '' + req.body.message,
	html: '<p>' + req.body.message + '</p>',
	};
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
