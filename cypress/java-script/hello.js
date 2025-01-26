console.log("HELLO"); // To display Text or String
console.log('WORLD'); // To display Text or String
console.log("JavaScript's Example"); // To display Text or String with single quote
console.log('JavaScript"s Example'); // To display Text or String with double quote
console.log(`"JavaScript's Example"`); // To display Text or String with single quote and double qoute
console.log(10); // To display an Integer
console.log(10.5); // To display an Float
// To execute program -->> node filename.js
// Variables : Variable is a thing that stores a value either string or number etc
// Rules :
//1. variable name should not start with a number
//2. variable name should not contain a keyword
//3. variable name should not contain special symbols except _ (underscore)

let firstname; // declaring or defining a varible
let lastname; // declaring or defining a varible
firstname = "John"; // assigning value into variable (String)
lastname = "Doe"; // assigning value into variable (String)
console.log(firstname); // To display variable value
console.log(lastname); // To display variable value

let length = 40; //declaring or defining & assigning a value (Integer) to the variable
let breath = 30; //declaring or defining & assigning a value (Float) to the variable
console.log(length); // To display variable value
console.log(breath); // To display variable value

let area = length * breath; // This is to perform product of 2 variables
console.log(area); // To display the value of the procuct of 2 variables

//Example
let a = 50;
let b = 20;
let result = a + b;
console.log("Addition of " + a + " & " + b + " is " + result); // Normal way
console.log(`Addition of ${a} & ${b} is ${result}`); // Using backtick
