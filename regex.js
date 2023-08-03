// let number='919500141061';
// let regex=/91/;
// if (regex.test(number)) {
//     console.log('valid number');
// }
// else{
//     console.log('invalid number');
// }

// regex for case insensitive
// let name='Immanuel'
// let regex=/i/i;
// (regex.test(name))?console.log('valid name'):console.log('invalid name')

// first charecter options

// let str="got";
// let regex=/[bghilpd]ot/
// regex.test(str)?console.log('valid name'):console.log('invalid name')


// let str="zot"
// let regex=/[bghilpd]ot/;
// regex.test(str)?console.log('valid name'):console.log('invalid name')


// charecter range
// let nom='cest'
// let regex=/[c-z C-Z]est/;   
// // here in regex the values from c to z are valid except a,b also add C-Z for case insensitive
// regex.test(nom)?console.log('valid name'):console.log('invalid name');


// regex to exclude ^
// let nom='aot';
// let regex=/[^abzy]ot/;
// regex.test(nom)?console.log('valid name'):console.log('invalid name');


// mobile number 
// ^start of string
// $ end of strign
// ^ is to exclude only if used inside array brackets
// \d match any digit
// \w any word
// \s match white space
// \t match tab only



// let num='9500141061';
// // let regex=/^[7-9][0-9]{9}$/;  
// let regex=/^[7-9]\d{9}$/;  

// regex.test(num)?console.log('valid number'):console.log('invalid number');



// here t should not be first letter
// let nom='taot';  
// let regex=/^(?!t).*$/
// let regex=/^[^t].*$/

// regex.test(nom)?console.log('valid name'):console.log('invalid name');


// let nom='tanmay'
// let regex=/^[t].*$/;
// regex.test(nom)?console.log('valid name'):console.log('invalid name');



// let nom ='immanuel'
// let regex=/^(?=(?:[^m]*m){2}[^m]*$)/;
//  regex.test(nom)?console.log('valid name'):console.log('invalid name');



