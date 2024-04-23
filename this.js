

// let obj={
//     a:10,
//     b:20,
//     greet:function greet(){
//         return this.a+this.b
//     }
// }


// console.log(obj.greet())


// const user={
//     name:'immanuel',
//      logMessage(){
//         return this.name
//     }
// }

// console.log(user.logMessage())

// setTimeout(
//     ()=>{console.log(user.logMessage())}
// , 2000);


// function person(name){
//     this.name=name
//     return `hello ${this.name}`
// }


// console.log(person("immanuel"));



// call,apply and bind



const obj={
    name:'immanuel',
    age:30,
}

// function person(){
//     return this.name
// }

// function person(age){
//     return `${this.name} is ${age} old`
// }


// function person(age,number,add){
//     return `${this.name} is ${age} old with ${number} and also ${add}`
// }

// console.log(person.call(obj,23));
// console.log(person.call(obj,23,90,"simon"));
// console.log(person.apply(obj,[23,90,"simon"]));


// let func=person.bind(obj,30,45,"givson");
// console.log(func())



// let age=20;

// let person={
//     name:'immanuel',
//     age:30,
//     greet:function greet(){
//             console.log(this.age);
//     }
// }

// let person2={age:33}
// person.greet.call(person2)



// let arr=[1,2,3]
// let ar2=[4,5,6]

// arr.push.call(arr,...ar2)
// console.log(arr);