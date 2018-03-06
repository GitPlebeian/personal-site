express = require('express');
app = express();

var https = require('https')
var fs = require('fs')

var sslPath = '/etc/letsencrypt/live/www.jaxtubbs.site/'

var options = {
	key: fs.readFileSync(sslPath + 'privkey.pem'),
	cert: fs.readFileSync(sslPath + 'fullchain.pem')
}

app.use(express.static("public"));
app.set("view engine", "ejs");
//
// app.get("/", function(req,res){
// 	console.log("Someone Connected")
// 	res.render("homepage");
// });
//
// app.get('/health-check',(req,res) => res.sendStatus(200));
//
//
// app.get("/websites", function(req,res){
// 	res.render("websites");
// });
// app.get("/contact", function(req,res){
// 	res.render("contact");
// });
//
// app.get("/single-page", function(req,res){
// 	res.render("websites/onePage");
// });
// app.get("/parlax-photography", function(req,res){
// 	res.render("websites/paralaxPhotography");
// });

server = https.createServer(options, function(req,res){
	app.get("/", function(req,res){
		console.log("Someone Connected")
		res.render("homepage");
	});
})
// io = require('socket.io').listen(server)
server.listen(443)
