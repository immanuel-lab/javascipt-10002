// push pop  fill join shift unshift tostring
// indexof   delete  concat 
// splice,slice
// join
// flat 
// Array .isArray .from
// sort reverse
// in includes

// find,findIndexof
// map filter reduce some every

// in to determine whether an element in present in an array

// let a=[1,2,3,4,5]
// console.log(13 in a);
// console.log(a.includes(1));




// let a=[1,2,3,4,5]
// a.push(6)
// console.log(a);


// var a=[1,2,3,4,5]
// a.pop()
// console.log(a);



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);
// console.log(fruits[fruits.length-1]);

// let a="25"
// let b="300"
// console.log(a<b);


// const points = [40, 100, 1, 5, 25, 10,-2];
// points.sort(function(a, b){return a - b});
// console.log(points);


    
// var fruits = ['Apple', 'Banana', 'Grape'];
// fruits.fill('imman')
// console.log(fruits);


// let message = ["JavaScript", "is", "fun."];
// let joinedMessage = message.join("1");
// console.log(joinedMessage);


// let languages = ["English", "Java", "Python", "JavaScript"];
// languages.shift()
// console.log(languages);

// let languages = ["Java", "Python", "C"];
// languages.unshift('c#','l')
// console.log(languages);


// let languages = ["JavaScript", "Java", "C++"];
// let iteratorObject = languages.valueOf();
// for (let value of languages) {
//     console.log(value);
//   }
// console.log(iteratorObject);


// let items = ["JavaScript", 1, "a", 3];
// let items1=items.toString()
// console.log(items1);
// console.log(typeof items1);


// let items = ["JavaScript", 1, "a", 3];
// console.log(items.includes(1));


// let languages = ["Java", "JavaScript", "Python", "JavaScript"];

//  let index = languages.indexOf("JavaScript");
// console.log(index);

// console.log(languages.count("java"));


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// console.log(fruits);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);



// let a=[1,2,3,4,5]

// for (i=0;i<a.length;i++){
//     console.log(a[i])
// }


// for(i of a){
//     console.log(i)
// }

// in gives us the array index
// for (i in a) {
//     console.log(a[i]);
// }





// var arr=[1,2,3,41,4,5,54,76]

// arr.splice(2,4)
// console.log(arr);


// arr.splice(2,0,99,89,999,888)
// console.log(arr);

// arr.splice(3,1)
// console.log(arr);


// let str='imman'
// let name1=new Set(str)





// JavaScript "delete"
// const Employee = {
//     firstname: 'John',
//     lastname: 'Doe'
//   };
// //   delete Employee.firstname;
  
//   console.log(Employee);
//   console.table(Employee);
  // expected output: "John"
  

// flat an array
// let arr=[[1, 2], [3, 4], [5, 6]]
// let arr1=arr.flat();
// console.log(arr1);





// let arr=[1,2,3,4,5]
// console.log(1 in arr);



// for of loop
// let arr = [1, 2, 3, 4, 5];

// for (let item in arr) {
//   console.log(item); 
// }


// for in loop
// let arr = [1, 2, 3, 4, 5];

// for (let item in arr) {
//   console.log(item); 
// }



