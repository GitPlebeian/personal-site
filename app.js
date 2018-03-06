var express = require('express');
app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

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
app.listen(3000, function(){
	console.log("Starting Server");
});
