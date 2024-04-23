// chaining operator in objects



// to simplify the process of accessing nested properties of objects without having to explicitly check each level for null or undefined


let user = {
    address: {
      street: '123 Main St',
      city: 'Exampleville'
    }
  };

//   let street=user.address ? user.address.street : undefined
//   console.log(street);

// using chaining operator

// console.log(user.address?.street);

// console.log(user.address?.city);