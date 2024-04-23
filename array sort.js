// sorting an array
// bubble sort

// let arr=[4,3,1,2,12,11]

// for(let j=0;j<arr.length;j++){
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//         let temp=arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=temp
//     }
// }
// }
// console.log(arr);


// function quickSort(sequence) {
//     const length = sequence.length;

//     if (length <= 1) {
//         return sequence;
//     } else {
//         const pivot = sequence.pop();
//         const itemsGreater = [];
//         const itemsLower = [];

//         for (const item of sequence) {
//             if (item > pivot) {
//                 itemsGreater.push(item);
//             } else {
//                 itemsLower.push(item);
//             }
//         }

//         return quickSort(itemsLower).concat([pivot], quickSort(itemsGreater));
//     }
// }

// // Example usage:
// const sortedArray = quickSort([10, 9, 8, 7, 6, 5,8]);
// console.log("Sorted array:", sortedArray);



// quick sort





function quickSort(arr){
        if(arr.length<=1){
            return arr
        }
        else {
            let pivot=arr[arr.length-1]
            let itemsGreater=[]
            let itemsLower=[]
            for(let item of arr){
                if(pivot>item){
                    itemsLower.push(item)
                }
                else if(pivot<item) {
                    itemsGreater.push(item)
                }
            }
        return [...quickSort(itemsLower),pivot,...quickSort(itemsGreater)]

        }
    }

const sortedArray = quickSort([10, 9, 8, 7, 6, 5,8]);
 console.log("Sorted array:", sortedArray);



