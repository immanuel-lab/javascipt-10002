
// let startTime=performance.now();
// let arr=[]
// for(let i=0;i<=90000000;i++){
//     arr.push(i)
// }

// let endTime = performance.now();

// let timeTaken=endTime-startTime

// console.log('time taken',timeTaken);



// Start the timer
const startTime = performance.now();

// Create a Web Worker
const worker = new Worker('worker.js');

// Sending a message to the worker
worker.postMessage({ start: 0, end: 90000000 });

// Receiving a message from the worker
worker.onmessage = function (event) {
  // Stop the timer when the worker completes
  const endTime = performance.now();
  const timeTaken = endTime - startTime;

  console.log('time taken', timeTaken);
  console.log('Received array from worker:', event.data);
};

// Handling errors from the worker
worker.onerror = function (error) {
  console.error('Error in the worker:', error.message);
};
