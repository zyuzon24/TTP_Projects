var express = require('express');
var app = express();
var request = require('request');

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'pug');


//this function fixes the capitalization of the city
function titleCase(str) {
     str = str.toLowerCase().split(' ');                // will split the string delimited by space into an array of words

     for(var i = 0; i < str.length; i++){               // str.length holds the number of occurrences of the array...
          str[i] = str[i].split('');                    // splits the array occurrence into an array of letters
          str[i][0] = str[i][0].toUpperCase();          // converts the first occurrence of the array to uppercase
          str[i] = str[i].join('');                     // converts the array of letters back into a word.
     }
     return str.join(' ');                              //  converts the array of words back to a sentence.
}

app.get('/', function(req,res){
  res.render('index');
});

app.post('/myform', function(req,res){
  var info = req.body;
  var city = titleCase(info.city)
  const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +city+"&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";

  let weatherData;

  request.post(URL, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            weatherData = JSON.parse(body);
            const iconURL = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
            const description = weatherData.weather[0].description;
            console.log(weatherData);
            console.log(description);
            res.render('myform', {
              city: city,
              temp : weatherData.main.temp,
              icon : iconURL,
              description: description
            });
        }
  });


});



app.listen(3000);
console.log('This app is using the port 3000');
