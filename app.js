express = require('express');
app = express();

var http = require('https')
var fs = require('fs')

var sslPath = '/etc/letsencrypt/live/www.jaxtubbs.site/'

var options = {
	key: fs.readFileSync(sslPath + 'privkey.pem'),
	cert: fs.readFileSync(sslPath + 'fullchain.pem')
}

app.use(express.static("public"));
app.set("view engine", "html");

app.get("/", function(req,res){
	console.log("Someone Connected")
	res.render("homepage");
});

app.get("/google093b9f16cb00e240.html", function(req,res){
	res.render("google093b9f16cb00e240");
});


app.get("/websites", function(req,res){
	res.render("websites");
});
app.get("/contact", function(req,res){
	res.render("contact");
});

app.get("/single-page", function(req,res){
	res.render("websites/onePage");
});
app.get("/parlax-photography", function(req,res){
	res.render("websites/paralaxPhotography");
});

server = http.createServer(options, app)
io = require('socket.io').listen(server)
server.listen(443)
