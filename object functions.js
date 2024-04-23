// Object.keys
// Object.values
// Object.entries

// Object.freeze
// Object.seal
// Object.preventExtensions


// Object.isFrozen
// Object.isSealed
// Object.isExtensible


// Object.is()



// let car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2022,
//     color: 'Blue'
//   };


//   let van={
//     make:'toyota',
//     color:car.color,
//   }


// console.log(car.isPrototypeOf(van));


// console.log(van.isPrototypeOf(car))



//   console.log(Object.keys(car));
//   console.log(Object.values(car));


// console.log(Object.entries(car));

// Object.preventExtensions(car)
// car.number=123;
// console.log(car);
// console.log(Object.isExtensible(car));


// console.log(car.prototype.isPrototypeOf(bar));





// let car = {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2022,
//   color: 'Blue'
// };


// let values=Object.values(car)
// console.log(values.includes(2022));
// console.log(values);

// console.log(car.hasOwnProperty('make')); // Outputs: true
// console.log(car.hasOwnProperty('price')); // Outputs: false

// console.log('make' in car)
// console.log(car['make']);



// let obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };
  
//   for (let key in obj) {
//     // console.log(key);
//     console.log(key + ': ' + obj[key]);
//   }




let car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
  color: 'Blue'
};



// let car1 = {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2022,
//   color: 'Blue'
// };


// console.log(Object.is(car,car1));


const obj={}
Object.defineProperty(obj,'myProperty', {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Blue'
  })

  console.log(obj);
  