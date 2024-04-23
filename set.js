// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists
// clear()	Removes all elements from a Set
// forEach()	Invokes a callback for each element
// values()	Returns an Iterator with all the values in a Set
// keys()	Same as values()
// entries()	Returns an Iterator with the [value,value] pairs from a Set
// Property	Description
// size	Returns the number elements in a Set


// let set=new Set()
// set.add(1)
// set.add(2)
// set.add(3)
// set.add(4)

// // console.log(set);

// set.delete(4)
// console.log(set);

// console.log(set.has(4))


// let set=new Set([1,2,3,4,5,3])
// console.log(set);

// set.clear()
// console.log(set);


let set=new Set([1,2,3,4,5,3])
console.log(set.keys());
console.log(set.values());


