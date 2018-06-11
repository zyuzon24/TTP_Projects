// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs')

// use res.render to load up an ejs view file

// main page
var data = {
  groceries: [{
  store: 'Acme',
  list: [
      'strawberries',
      'blueberries',
      'yogurt'
  ]
    }, {
  store: 'Corner Market',
  list: [
      'baguette',
      'basil',
      'tomatoes'
  ]
    }]
};

app.get('/', function(req, res) {

    res.render('list', {
      data: data
    });
});


app.listen(8080);
console.log('8080 is the magic port');
