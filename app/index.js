var express = require('express'),
    path    = require('path');

var PORT = 8000;
var app  = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
