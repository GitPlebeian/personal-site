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
	console.log("Someone Connected")
	res.render("homepage");
});

server = http.createServer(options, app)
io = require('socket.io').listen(server)
server.listen(443)
