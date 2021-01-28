// variable work
var name, city, age;
var name = 'Kristine';
city = 'Scottsdale';
age = 12;

console.log(age);
console.log(name);
console.log(city);


var name, city, age;
name = 'Kristine';
city = 'Scottsdale';
age = 12;

console.log(age);
console.log(name);
console.log(city);

//Hoisting means your var must be declared 
// before trying to return it otherwise youll get undefined

// Hoisted
name = 'Kristine';
console.log(name); // 'Kristine'
var name;

// Initializers not hoisted
console.log(age); // undefined
var age = 33;

//single line
/* multiline
*/