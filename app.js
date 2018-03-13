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
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("homepage");
});

app.get("/websites", function(req,res){
	res.render("websites");
});

app.get("/websites/business", function(req,res){
	res.render("websites/business.ejs");
});
app.get("/websites/business/products", function(req,res){
	res.render("websites/business1.ejs");
});

server = http.createServer(options, app)
io = require('socket.io').listen(server)
server.listen(443)
