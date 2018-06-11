var express = require('express');

var app = express();

// app.get('/hello/:name', function(request, response){
//   console.log('got request for "/hello/${request.params.name}"');
//   response.send(`hello ${request.params.name}!`);
// });
//
// app.listen(3000, function(){
// 	console.log('Example app listening on port 3000!');
// });

app.get(['/apple', '/ale'], function(request, response){  //you could've just did '/a(pp)?le'
  console.log('got request for either "/apple" or "/ale"');
  response.send(`Apple or Ale?`);
});

app.get('/who+a+', function(request, response){
  console.log('got request for "whoa"');
  response.send(`I know, right?!`);
});

app.listen(3000,function(){
  console.log('Example app listening on port 3000!');
});
