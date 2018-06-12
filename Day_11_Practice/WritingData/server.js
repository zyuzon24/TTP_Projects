var express = require('express');
var app = express();
var fs = require('fs');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'pug');

var submissions;
var exists = fs.existsSync('colors.json');
if (exists) {
  //Read the file
  console.log('loading the submissions');
  var txt = fs.readFileSync('colors.json','utf-8');
  //Parse the file back to the object
  submissions = JSON.parse(txt);
} else {
  console.log('There are no words');
  submissions = {};
}

app.get('/', function(req,res){
  res.render('index');
});

app.post('/myform', function(req,res){
  var person = req.body;
  console.log("person", person);

  res.render("profile", {
    name: person.name,
    color: person.color
  })

  app.get('/profile', function(req,res){
    res.render('profile');
  });

  var reply = {
    status: 'successful',
    name: person.name,
    color: person.color
  };
  console.log('adding:' + JSON.stringify(reply));
  submissions[person.name] = person.color;
  //Write a file each time we get a new word
  var json = JSON.stringify(submissions, null, 2);
  fs.writeFile('colors.json', json, 'utf-8', finished);
  function finished(err) {
    console.log('Finished writing colors.json');
  }

});

app.listen(8000);
console.log('8000 is the magic port');
