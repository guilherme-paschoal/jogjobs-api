var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('yolo');
});

app.listen(3000);