// object functions






// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";


// // accessing object properties
// // console.log(person["firstName"]);
// // console.log(person.firstName);


// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     isStudent: false,
//     address: {
//       street: "123 Main Street",
//       city: "Anytown",
//       zipCode: "12345"
//     },
//     hobbies: ["Reading", "Hiking", "Gaming"]
//   };
  
// console.log(person.firstName);
// console.log(person['firstName']);

// keys
// console.log(Object.keys(person))

// values

// console.log(Object.values(person))

// entries
// var sas=Object.entries(person)
// console.log(sas);

// Object.freeze(person)
// person['todo']=123
// console.log(Object.keys(person));

// Object.seal(person)
// person['firstName']=123
// console.log(Object.values(person));


// console.log(Object.isExtensible(person))


// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'Anytown',
//     country: 'USA'
//   },
//   hobbies: ['reading', 'coding', 'gaming'],
//   isActive: true,
//   greet: function() {
//     console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName + '.');
//   }
// };

// console.log('12' in person);



// convert  array into object

// let array = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];
// let array=[1,2,3,4,5]
// let obj = {};

// for (let [key, value] of array) {
//   obj[key] = value;
// }

// console.log(obj);



// let array = [1, 2, 3, 4, 5];

// let obj = array.reduce((accumulator, currentValue, currentIndex) => {
//   accumulator[currentIndex] = currentValue;
//   return accumulator;
// }, {});

// console.log(obj);



// convert object into array


// let obj={ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
// let arr=[]

// for(let value of Object.values(obj)){
//   // arr.push(value)
//   // arr.unshift(value)
// }
// console.log(arr);


// let obj = { a: 1, b: 2, c: 3 };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }


// in used to iterate over keys and of for values


// let obj={ a: 1, b: 2, c: 3 };

// for(let value in Object.keys(obj)){
//     console.log(value);
// }


// let car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2022,
//     color: 'Blue'
//   };


//   Object.preventExtensions(car)

//   car.make=1234;

//   console.log(car);

//   console.log(Object.isExtensible(car));


// Object.freeze(car)

// console.log(Object.isFrozen(car));

// car.color=124;
// console.log(car)


// let car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2022,
//     color: 'Blue'
//   };
// Object.seal(car)
// console.log(Object.isSealed(car));
// car.color='yellow'
// console.log(car);

// Object.preventExtensions(car)
// car.model='gun'
// console.log(car);

// delete car.color
// console.log(car);


// console.log(car.length);


// const entries = [
//     ['name', 'John'],
//     ['age', 30],
//     ['city', 'New York']
//   ];
  
//   const person = Object.fromEntries(entries);
  
//   console.log(person);
  // Output: { name: 'John', age: 30, city: 'New York' }
  


//   let car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2022,
//     color: 'Blue'
//   };


//   let model=car.year??'not there'
//   console.log(model);



// let car = {
//     make: 'Toyota',
//     model: {name:'camry',id:'er45',color:'blue'},
//     year: 2022,
//    };

// let id=car.model1?.id1??'not found'
// console.log(id);



// let id=car.model?.id??'not found'
// console.log(id);



// sorting the keys
// let car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2022,
//     color: 'Blue'
//   };

// let sortedKeys=Object.keys(car).sort()

// let newCar={}

// for (let key of sortedKeys) {
//   newCar[key]=car[key];
  
// }

// console.log(newCar);




// let arr=['make','model','year','colour']

// for(let i in arr){
//   console.log(i);
// }

// for(let key of arr){
//   console.log(key);
// }

// let arr=['make','model','year','colour']
// // let lastElement=arr[arr.length-1]
// let lastElementIndex=arr.length-1
// for(let i=0;i<=lastElementIndex;i++){
//   console.log(arr[i]);
// }

