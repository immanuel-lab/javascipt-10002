const obj={name:'immanuel',age:13}


Object.defineProperty(obj,'sex',{
    value:'male',
    writable:true
})

obj.sex='female'
console.log(obj.sex);



// const obj = {};

// Object.defineProperty(obj, 'name', {
//   value: 'immanuel',
//   writable: false,
//   enumerable: true,
//   configurable: false // Making the property non-configurable
// })

// delete obj.name
// console.log(obj);



// const person={}


// Object.defineProperties(person,{
//     name:{
//         value:'immauel',
//         writable:false,
//         enumerable:true,
//         configurable:false
//     },
//     age:{
//         value:30,
//         writable:false,
//         enumerable:true,
//         configurable:true
//     },
//     sex:{
//         value:'male',
//         writable:false,
//         enumerable:true,
//         configurable:false
//     },
// })


// console.log(person);
// delete person.age
// console.log(person);

// descriptor=Object.getOwnPropertyDescriptor(person,'name')
// console.log(descriptor);

// let desc=Object.getOwnPropertyDescriptors(person)
// console.log(desc);


// let desc=Object.getOwnPropertyNames(person)
// console.log(desc);