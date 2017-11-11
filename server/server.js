const express = require('express');
const favicon = require('serve-favicon');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '../client'));
app.use(express.static(__dirname + '../node_modules'));

app.use(favicon(path.join(__dirname, '../client', 'favicon.ico')));

app.get('/', (req, res) => {
  // fs.readFile(__dirname + '../client/index.html', )
  // res.render('index', 'index.html');
  res.send('yippee');
});

app.listen(5000, () => console.log('Example app listening on port 5000!'));


module.exports = app;