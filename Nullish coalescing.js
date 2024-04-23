// The ?? operator is called the nullish coalescing operator. 
// It was introduced in ECMAScript 2020 (ES11/ES2020). 
// The nullish coalescing operator is used to provide a default value for a 
// variable if the variable is null or undefined, but not for other falsy values
//  like 0, '', false, etc.

// let user = {
//     address: {
//       street: '123 Main St',
//       city: 'Exampleville'
//     }
//   };

// let number=user.address ?.number??'not there'
// console.log(number);

// let street=user.address?.street ?? 'not present'
// console.log(street)

// let num;
// console.log(num??'number not there');


// Logical Nullish Assignment 


// let num;
//  num??=13;
//  console.log(num);


//  let num=12;
//  num??=13;
//  console.log(num);