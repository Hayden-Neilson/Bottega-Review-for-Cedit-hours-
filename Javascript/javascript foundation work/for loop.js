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