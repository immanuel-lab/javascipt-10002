


// const currentDate = new Date();


// console.log(currentDate); 

// get the hour
// console.log(currentDate.getHours()); 
// console.log(currentDate.getDay()); 
// console.log(currentDate.getTimezoneOffset()); 

// the date and the year
// console.log(currentDate.getDate(),currentDate.getFullYear()); 

// console.log(currentDate.getDate(),'/',currentDate.getMonth());

// console.log(currentDate.toLocaleDateString()); 

// console.log(currentDate.getMinutes()); 

// time delta in hours

// var atime = new Date("2024-08-06");
// var btime = new Date("2024-08-27");

// var delta_time = btime - atime; 
// var hours = delta_time / (60 * 60 * 1000);
// var days=hours/24
// console.log(days);


// Setter methods are used to set or update the value of an object's property. They are called "setters" because they set the value of a property.

let date = new Date();
date.setFullYear(2025);
date.setDate(15)
date.setMonth(5)
date.setMinutes(21)


console.log(date.toLocaleString());
console.log(date.getMinutes());


