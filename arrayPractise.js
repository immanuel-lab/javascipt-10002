// remove duplicates from array

// let arr=[1,2,3,4,5]
// console.log(arr.indexOf(4));
// function removeDuplicates(arr){
//     let newArray=[]
//     arr.filter((Element,index)=>{
//        if(! newArray.includes(Element)){
//            newArray.push(Element)
//        }


//     })
//     return newArray
// }


//  let arr=[1,2,3,4,5,6,7,8,2,4]
//  let newArray=removeDuplicates(arr)
//  console.log(newArray);


// 2.removing using set

// function removeDuplicates(arr){
//     let newSet=new Set(arr)
//     let newArray=Array.from(newSet)
//     return newArray

// }

//  let arr=[1,2,3,4,5,6,7,8,2,4]
//  let newArray=removeDuplicates(arr)
//   console.log(newArray);


// function removeDuplicates(arr){
//     let set=new Set(arr);
//     let newArray=[...set]
//     return newArray
// }
//  let arr=[1,2,3,4,5,6,7,8,2,4]
//  let newArray=removeDuplicates(arr)
//   console.log(newArray);

// let arr=[1,2,3,4,5]
// Object.freeze(arr)
// arr.push(6)
// console.log(Object.isFrozen(arr));


// let arr=[1,2,3,4,5]
// Object.seal(arr)
// arr[0]=12
// arr.push(12);
// console.log(arr);
// console.log(Object.isSealed(arr));





// function removeDuplicates(arr){
//    return arr.filter((Element,index)=>  arr .indexOf(Element)===index ) 
//    }
// let arr1=removeDuplicates(arr)
// console.log(arr1);

// function removeDuplicates(array){
//     return array.forEach((Element,index)=>array.indexOf(Element)===index)
// }
// let arr=[1,2,3,4,5,1,2,4]

// let arr1=removeDuplicates(arr)
// console.log(arr1);

// using splice method to remove duplicates
// let arr=[1,2,3,4,5,1,2,4,12,12]

// for(let i=0 ;i<=arr.length;i++){
//     for(let j=i+1;j<=arr.length;j++){
//         if(arr[i]===arr[j]){
//             arr.splice(j,1)
//         }
//     }

// }

// console.log(arr);


// let arr=[5,3,1,2,45,32,22]
// arr.sort((a,b)=>{
//     return a-b
// })
// console.log(arr);









// # a=[32,43,4,3,55,6]
// # n=(a[len(a)-1])
// # for j in range(0,len(a)-1):
// #     for i in range(0,len(a)-1):
// #         if a[i]>a[i+1]:
// #             temp=a[i]
// #             a[i]=a[i+1]
// #             a[i+1]=temp
// #             print(a)




// join split

// let name1='immanuel is good'
// let name2=name1.split(' ').reverse().join(' ')
// console.log(name2);



// let name1='immanuel is good'
// let nom=name1.split('')
// console.log(nom);


// let name1='immanuel is good'
// let nom=name1.split(' ').toString()
// console.log(nom);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
 // delete fruits[0];

// console.log(fruits);



const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);


// const myChildren = [...myGirls,...myBoys]
// console.log(myChildren);

// console.log(Array.isArray(myBoys));