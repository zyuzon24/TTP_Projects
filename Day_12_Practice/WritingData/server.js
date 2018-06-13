var fs = require('fs');


var submissions;
var exists = fs.existsSync('peopleComplete.json');
if (exists) {
  //Read the file
  console.log('loading the submissions');
  var txt = fs.readFileSync('peopleComplete.json','utf-8');
  //Parse the file back to the object
  submissions = JSON.parse(txt);
} else {
  console.log('There are no people');
  submissions = {};
}

let dataOfPeople = fs.readFileSync('people.json');
let listOfWomen = JSON.parse(dataOfPeople);

let dataofPeople2 = fs.readFileSync('people2.json');
let listOfMen = JSON.parse(dataofPeople2);

let combinedList = listOfWomen.concat(listOfMen);
console.log('Before sort the list is',combinedList);

combinedList.sort(function(a, b) {
  return a.name > b.name;
});

combinedList.sort();

console.log('After the sort the list is',combinedList);

let newList = JSON.stringify(combinedList, null, 2);
fs.writeFileSync('peopleComplete.json', newList);
