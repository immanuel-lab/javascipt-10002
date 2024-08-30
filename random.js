// let x=Math.trunc(Math.random()*10)
// console.log(x);





// generate random number between 1 and 6
// function getRandomNumber(min, max) {
//     let step1=max-min+1;
//     let step2=Math.trunc(Math.random()*step1)+min
//     return step2
// }

// let random=getRandomNumber(100,200)
// console.log(random);

// let random=getRandomNumber(1,7)
// console.log(random);



// get random interger number from 50 to 100

// function getRandomNumberWithin(min, max) {
//     let num = Math.trunc((Math.random() * max)+min );
//     return num
// }
// console.log(getRandomNumberWithin(50,100));



// select from array of items

// function getRandomNumber(min, max) {
//     let step1=max-min+1;
//     let step2=Math.trunc(Math.random()*step1)+min
//     return step2
// }

// let array=['john','alpha','peterson','loi','fred','alice','larry','kevin','james']

// let random=array[getRandomNumber(0,array.length-1)]
// console.log(random);



// function generateRandom(min,max){
//     const randomNumber=Math.trunc(Math.random()*(max-min)+1)+min
//     return randomNumber
// }

// console.log(generateRandom(11,20))






function randomChoice(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) 
    return randomNumber;
}


// console.log(randomChoice(0,5))

//  let array=['john','alpha','peterson','loi','fred','alice','larry','kevin','james']


//  console.log(array[randomChoice(0,(array.length-1))]);
 

// function shuffleArray(array) {
//         for (let i = 0; i <=array.length - 1; i++) {
//     //   const j = Math.floor(Math.random() * (i + 1));
//       const j = Math.floor(Math.random() * (i ));
//     //  [array[i], array[j]] = [array[j], array[i]];
//     let temp=array[i]
//     array[i]=array[j]
//     array[j]=temp
//     }
//      return array;
   
//   }


//   console.log(shuffleArray([1,2,3,4,5]));
  


// random boolean


// const randomBool=Math.random()<0.5

// console.log(randomBool);


// const randomBool=Math.floor(Math.random()*10)===4
// console.log(randomBool);

const randomBool = [4, 5].includes(Math.floor(Math.random() * 10))
console.log(randomBool);
