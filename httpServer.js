var express = require('express');
app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('*', function(req, res) {
    res.redirect('https://' + req.headers.host + req.url);
})
app.listen(80, function(){
	console.log("Starting Server");
});
