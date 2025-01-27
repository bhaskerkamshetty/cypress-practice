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
//4. variable name is case sensitive

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

// 3 ways of declaring variables
// 1. using var keyword
// 2. using let keyword
// 3. using const keyword

// Scope of variable
// Global Scope (Public) --> accessible and can be modified everywhere within the program
// Local Scope (Private) --> accessible and can be modified within the function only

// Data Types
// String --> Collection or group of characters
// Number / Integer --> numbers positive or negative like -100 or 
// BigInt --> stores number more than 16 digits
// Boolean --> True or False / 0 or 1
// Undefined --> If not assigned any value
// Null --> It is given explicitly as null value

// Type Conversion
// Conversion of data types from one data type to another data type

//Example for converting number into string
length = 60;
breath = 20;
area = String(length) * String(breath);
console.log(area);

//Example for converting string into number
length = "60";
breath = 20;
area = Number(length) * breath;
console.log(area);

//Example for converting number into boolean
let value = 1;
console.log(Boolean(value));
value = 0;
console.log(Boolean(value));

// Operators :
// Addition Operator (+)
// Increment Operator (++)
// Substraction Operator (-)
// Decrement Operator (--)
// Multiplication Operator (*)
// Exponentiation Operator (**)
// Division Operator (/)
// Modulus Operator (%)
// Assignment Operator (=) :
// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y
// Comparision Operator (>) (<) (<=) (>=)
// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator (for checking conditions)