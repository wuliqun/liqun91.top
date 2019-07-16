var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(80, function() {
 console.log('App listening at port 80;');
});