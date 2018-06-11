//server.js
//load the things we need
var express = require('express');
var hbs = require('hbs');
var fs = require('fs');
var app = express();


//set the view engine to hbs
hbs.registerPartial('list', fs.readFileSync('./views/list.hbs','utf-8'));
app.set('view engine', 'hbs');


//use res.render to load up an hbs view file
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
//main page
app.get('/', function(req, res){
    res.render('list', {
      data: data
    });
});

app.listen(8081);
console.log('8081 is the magic port');
