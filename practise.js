// 1.// Reverse a String:
// Write a function that takes a string as input and returns the string reversed.


// const str = "Hello, world!";
// const expectedOutput="!dlrow ,olleH"

// const reversedString=str.split('').reverse().join('')
// console.log(reversedString);



// 2.majority element
// Input: nums = [3,2,3]
// Output: 3

// [1,2,3,4,5,5,4,4,4]
// function MajorityElement(arr){
//     let obj={}
   
//     for(let i of arr){
//         if(obj[i]===undefined){
//             obj[i]=1;
//         }
//         else{
//             obj[i]++
//         }
//     }
    

//     let maxElement;
//     let count=0
//     for(let j in obj){
//         if(obj[j]>count){
//             count=obj[j]
//             maxElement=j
//         }
//     }
//   return `maxElement is ${maxElement} with ${count} occurings`
// }


// let arr= [1,2,3,4,5,5,4,4,4,6,6,6,6,6]
// console.log(MajorityElement(arr))


//3.check if object is empty

// const obj={god:'jesus'}


// if(Object.keys(obj).length===0){
//     console.log(true);
// }

// if(Object.keys(obj).length!==0){
//     console.log(false);
// }

// remove  vowels from string
// in for checking index exists and includes for checking element exist in array
// let input="compuuter"


// let inputArr=input.split('')
// let vowels=['a','e','i','o','u']
// let arr=[]

// for(let i of inputArr){
//    if(!vowels.includes(i)){
//         arr.push(i)
//    }
// }
// let output=arr.join('')
// console.log(output);


// let input="compuuter"
// let output=""
// let vowels="aeiou"

// for(i of input){
//     if(!vowels.includes(i)){
//         output+=i
//     }
// }

// console.log(output);



// random choice

// let arr=['one','two','three','four','five']


// let randomChoice= arr[Math.round(Math.random()*arr.length)]
// console.log(randomChoice)



// genertating random arrays
// Function to generate a random word of a given length
// function generateRandomWord(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

// // Function to generate an array of random words of length 4
// function generateRandomWordsArray(length) {
//     var wordsArray = [];
//     for (var i = 0; i < length; i++) {
//         var word = generateRandomWord(4); // Generate a word of length 4
//         wordsArray.push(word); // Add the word to the array
//     }
//     return wordsArray;
// }

// // Example usage
// var randomWords = generateRandomWordsArray(1000); // Generate an array of 4 random words
// console.log(randomWords); // Output the array of random words

// generate random words


function generateRandomWord(length){
    let word=''
    let letters1="abcdefghijklmnopqrstuvwxyz"
    let letters=letters1+letters1.toUpperCase()
    for(let i=0;i<length;i++){
        let randomNumber=Math.trunc(Math.random()*10)
         let randomWord=letters[randomNumber]
         word+=randomWord
    }
    return word
}


// console.log(generateRandomWord(4))


// generating an array of words

// arr=[]

// for(let i=0;i<10;i++){
//     arr.push(generateRandomWord(4))
// }

// console.log(arr)