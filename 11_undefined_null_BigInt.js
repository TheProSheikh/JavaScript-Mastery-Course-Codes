// Undefined 

// let firstName;
// console.log(typeof firstName);
// firstName = "Adeel";
// console.log(typeof firstName, firstName );

// Null

// let myVariable = null;
// console.log(myVariable)
// myVariable = "shiekh";
// console.log(typeof myVariable, myVariable);

// console.log(typeof null); //object : this error/bug in JavaScript 'cause it's actual value is null not object(object is reference type)
// Reason why JavaScript developer not removing this bug 'cause if they'll change this then all the code and FRAMEWORDS written in JS will have to change that's why they're not removing this.

// BigInt :added in JS in 2020

let myNumber = BigInt(12);
console.log(typeof myNumber);
let sameNumber = 123n;
console.log(myNumber + sameNumber)
