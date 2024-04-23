// push pop shift unshift reverse sort at
// splice slice
// find findindexof indexof lastindexof



// splice

// let arr=[1,2,3,4,5,6,7,8]
// arr.splice(1,1,'car')
// console.log(arr);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits);



// using slice to remove items
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2,3)
// console.log(fruits);


// slice returns new array
// let arr=[1,2,3,4,5,6,16,7,8]
// let narr=arr.slice(1,3)
// console.log(narr);


// from3 to rest
// let arr=[1,2,3,4,5,6,16,7,8]
// let narr=arr.slice(3)
// console.log(narr);



// splice to also delete elements
// let arr=[1,2,3,4,5,6,7,8,9,11,21,43]

// arr.splice(2,2)


// to remove all elements till the end of array using splice 
// let arr=[1,2,3,4,5,6,7,8,9,11,21,43]

// arr.splice(2)
// console.log(arr);





// indexof and lastindexof

// let arr=[1,2,3,4,5,6,7,7]
// console.log(arr.indexOf(7));
// console.log(arr.lastIndexOf(7));



// let arr=[1,2,3,4,5,6,7]
// let arr1=arr.find((num)=>num>4)
// let arrIndex=arr.findIndex((num)=>num>4)
// console.log(arr1);
// console.log(arrIndex);