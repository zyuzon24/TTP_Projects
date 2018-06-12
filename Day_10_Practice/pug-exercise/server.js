var express = require('express');
var app = express();

app.set('view engine', 'pug');

var data = {
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

app.listen(8082);
console.log('8082 is the magic port');
