var express = require('express');
var app = express();

app.set('view engine', 'pug');

var shows = [{
    title: 'Sense8',
    body: 'The story of Sense8 begins when the psychic connection of eight strangers from different cultures and parts of the world is "birthed" by a woman called Angelica, who kills herself to avoid capture by a man named "Whispers". The eight eventually discover they now form a cluster of "sensates": human beings who are mentally and emotionally linked, can sense and communicate with each other, and can share their knowledge, language, and skills.'
  },{
    title: 'Brooklyn Nine-Nine',
    body: 'Brooklyn Nine-Nine is an American police television sitcom that premiered on Fox on September 17, 2013.[3] Created by Dan Goor and Michael Schur, the series revolves around Jake Peralta (Andy Samberg), an immature but talented NYPD detective in Brooklyns 99th Precinct, who comes into immediate conflict with his new commanding officer, the serious and stern Captain Raymond Holt (Andre Braugher).'
  },{
    title: 'Survivor',
    body: 'Survivor is the American version of the international Survivor reality competition television franchise, itself derived from the Swedish television series Expedition Robinson created by Charlie Parsons which premiered in 1997.'
  }
]
//main page
app.get('/', function(req, res){
    res.render('index', {
      shows: shows
    });
    console.log('successfully rendered the main page');
});

//page for the show
app.get('/shows/:title', function(req,res){
  const show = shows.filter((show) => {
    return show.title == req.params.title
  })[0];

  res.render('shows', {
    title: show.title,
    body: show.body
  });
  console.log('successfully rendered the page for', show.title);
});

app.listen(8080);
console.log('8080 is the magic port');
