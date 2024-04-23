

// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)










// let str='iman'
// console.log(str.length);
// console.log(str.toUpperCase());


// let str1="IMMAN"
// console.log(str1.toLowerCase());

// let text = "How are you doing today?";
// let myArray = text.split(" ")
// console.log(myArray);
// let text1=myArray.join(" ")
// console.log(text1)





// let str = "Apple, Banana, Kiwi";




// let str1=str.slice(7,13)
// console.log(str1);





// let str1=str.slice(-13,-4)
// console.log(str1);

// let str1=str.slice(-6,-13)
// console.log(str1);



// let str2=str.substr(7,6)
// console.log(str2);



// let str2=str.substring(-5,-12)
// console.log(str2)



// var myVar = "Hello World";
// myVar.toUpperCase();
// console.log(myVar);
// One may think after the first line the myVar will become “HELLO WORLD”, 
// but it still equals to “Hello World”. The method will return a new String object it will 
// not change the existing String reference. So we have to assign it to a new variable to
//  get the desired value.

// var myVar = "Hello World";
// var new1=myVar.toUpperCase();
// console.log(new1);



// replace  and replaceALL
// can use /i and /g for case sensitive

// let text = "Please visit Microsoft!";
// // console.log(newText);
// // let newText = text.replace("microsoft" ,"W3Schools");
// let newText = text.replace(/microsoft/i ,"W3Schools");
// console.log(newText);


// let text = "Please visit Microsoft! and so as Microsoft";
// let newText = text.replace(/Microsoft/g, "W3Schools");
// console.log(newText);


// let text = "Please visit Microsoft! and so as Microsoft";
// let newText = text.replaceAll("Microsoft", "W3Schools");
// console.log(newText);



// let text = "Please visit Microsoft! and so as Microsoft";
// let alpha=text.replace(/microsoft/gi,(a)=>a.slice(0,4))
// console.log(alpha);


// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(",", text2);
// console.log(text3);



// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text1);


// let text1 = "      Hello World!      ";
// let text2 = text1.trimStart();
// console.log(text2);



// accessing a charecter
// let text = "HELLO WORLD";
// let char = text[0];
// console.log(char);
// console.log(text[0]);


// const str1 = '5';

// console.log(str1.padStart(6, '0'));
// console.log(str1.padEnd(6, '0'));


// let name="my name is immanuel"
// let nom=name.split(' ')
// console.log(nom);
// let mom=nom.join(' ')
// console.log(mom)
