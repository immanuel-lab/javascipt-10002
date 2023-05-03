// filter, map, reduce, some, every, flat


// MAP
// map creates a new array based on old array
// let numbers = [1, 2, 3, 4];
// let doubledNumbers=numbers.map(item => item);
// console.log(doubledNumbers); // [2, 4, 6, 8]


// filter

// let arr=[1,2,3,4,5,6,8,10,12,14]
// let newArray=arr.filter(item=>item%2===0)
// console.log(newArray);




// reduce
// let arr=[1,2,3,4,5,6,8,10,12,14]
// let sum=arr.reduce((a,b)=>a+b)
// console.log(sum);


// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// const ages = [32, 33, 16, 40,12];
// console.log(ages.every((age)=>age>15))

// SOME METHOD
// The some() method checks if any array elements pass a test (provided as a callback function).

// The some() method executes the callback function once for each array element.

// The some() method returns true (and stops) if the function returns true for one of the array elements.

// The some() method returns false if the function returns false for all of the array elements.

// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.

// let arr=[1,2,3,4,5]
// let result=arr.some((item)=>item>10)
// console.log(result);





// The flat() method concatenates sub-array elements.
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr)



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruits[1]);