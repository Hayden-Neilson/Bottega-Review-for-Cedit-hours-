var name, city, age;
name = 'Kristine';
city = 'Scottsdale';
age = 12;

console.log(age);
console.log(name);
console.log(city);








// How to Use the Splice Function in JavaScript to Remove Specific Array Elements

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');

foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"]

arr; // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]

arr; // ["Altuve"]



// Guide to For Loops in JavaScript


var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
//   For
  for (player in players) {
    console.log(players[player]);
  }
//   for in
  for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
//   forEach
  players.forEach(function(element) {
    console.log(element);
  });

//   How to Loop Through a JavaScript Object

  var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
  };
  
  for (var key in student) {
    console.log(key + " => " + student[key]);
  }
  


  var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
//   while
  var i = 0;
  while (i < players.length) {
    console.log(players[i]);
    i++;
  }
//   do/while
  var i = 21;
  do {
    console.log(players[i]);
    i++;
  } while (i < players.length)

//   Googlesearch

const searchBar = document.querySelector

$('.gLFyf').value = "Javascript tips";

$(".FPdoLc").childNodes[1].childNodes[1].click()


// How to Pull Images from Instagram with JavaScript for a person

const images = document.querySelectorAll('.FFVAD') 

images.forEach(img => console.log(img.src));

let imageUrlArray = [];

images.forEach(img => imageUrlArray.push(img.src));