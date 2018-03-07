var express = require('express');
app = express();

app.get('*', function(req, res) {
    res.redirect('https://' + req.headers.host + req.url);
})

app.listen(80, function(){
});
