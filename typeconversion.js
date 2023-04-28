// Type Conversion of numbers, strings, booleans
// (Explicit vs Implicit)

// change the datatype of a value to another

var age = window.prompt("How old are you?");
 
console.log("HAPPY BIRTHDAY!");
 
age = Number(age);
 
age += 1;
 
console.log(typeof age);
console.log(age);

/*
var myVar;

myVar = Number("3.14");
//myVar = String(3.14);
//myVar = Boolean("pizza"); 

console.log(typeof myVar);
console.log(myVar);
*/