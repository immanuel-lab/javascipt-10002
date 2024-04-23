
// to make private variables

// Variables created without a declaration keyword (var, let, or const) 
// are always global, even if they are created inside a function.


// function outer(){
//     let count=50

//     function inner(points){
//         count+=points
//         console.log(count)
//     }
    
//     return  {inner,count}
// }

// const  score=outer()
// score.inner(500)


// global variable
// let counter=0   

// function count(){
//     counter+=1
//     console.log(counter);
// }

// count()
// count()
// count()


// let counter=0   

// function count(){
//     let counter=0;
//     counter+=1
//     console.log(counter);
// }

// count()
// count()
// count()



// let count="immanuel"

// function outer(){
//     let name="ebve"
//     function inner(){
//         console.log(count);
//         console.log(name);
//     }
//     return inner()
// }

// outer();


// const add = (function () {
//     let counter = 0;
//     return function () {
//         counter += 1; 
//         return counter}
//   })();
  
//   add();
//   add();
//   console.log(add())



// function outer(){
//     let counter = 0;
//     function inner(){
//         counter += 1;
//         console.log(counter);
//     }
//     return {inner};
// }

// let count=outer()
// count.inner()
// count.inner()
// count.inner()




// function outer(){
//     let counter = 0;
//     return function inner(){
//         counter += 1;
//         console.log(counter);
//     }
   
// }

// outer()
// outer()
// outer()



function outer(){
    let counter = 0;
    return function(){
        counter += 1;
        console.log(counter);
    }
   
}


const add=outer()
add()
add()
add()
