this.express = require('express');
this.app = this.express();

var http = require('https')
var fs = require('fs')

var sslPath = '/etc/letsencrypt/live/www.jaxtubbs.site/'

var options = {
	key: fs.readFileSync(sslPath + 'privkey.pem'),
	cert: fs.readFileSync(sslPath + 'fullchain.pem')
}

this.app.use(this.express.static("public"));
this.app.set("view engine", "ejs");

this.app.get("/", function(req,res){
	res.render("homepage");
});

this.app.get('/health-check',(req,res) => res.sendStatus(200));


this.app.get("/websites", function(req,res){
	res.render("websites");
});
this.app.get("/contact", function(req,res){
	res.render("contact");
});

this.app.get("/single-page", function(req,res){
	res.render("websites/onePage");
});
this.app.get("/parlax-photography", function(req,res){
	res.render("websites/paralaxPhotography");
});

this.server = http.createServer(options, this.app)
this.io = require('socket.io').listen(this.server)
this.server.listen(443)
