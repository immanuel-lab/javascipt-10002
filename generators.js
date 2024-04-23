const arr=[1,2,3,4,15]





const generatorObj = arr[Symbol.iterator]();
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());



// function* iterable(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }