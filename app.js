express = require('express');
app = express();

var port = (process.env.PORT || process.env.VCAP_APP_PORT || 443);

var http = require('https')
var fs = require('fs')

var sslPath = '/etc/letsencrypt/live/www.jaxtubbs.site/'

var options = {
	key: fs.readFileSync(sslPath + 'privkey.pem'),
	cert: fs.readFileSync(sslPath + 'fullchain.pem')
}

app.use(express.static("public"));
app.set("view engine", "ejs");

app.enable('trust proxy');

app.use (function (req, res, next) {
        if (req.secure) {
                // request was via https, so do no special handling
                next();
        } else {
                // request was via http, so redirect to https
                res.redirect('https://' + req.headers.host + req.url);
        }
});

app.get("/", function(req,res){
	console.log("Someone Connected")
	res.render("homepage");
});

app.get('/health-check',(req,res) => res.sendStatus(200));


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
server.listen(80)
