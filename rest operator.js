// finding the sum



function sum(...args){
    let num=0;
    for(let n of args){
        num=num+n
    }
    return num
}

let sum1=sum(1,2,3,4)
console.log(sum1);