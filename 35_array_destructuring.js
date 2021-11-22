// array destructuring
document.write("<h1>Array Destructing</h1>")

const myArray = ['value1', 'value2','value3','value4','value5'];
// let var1 = myArray[0];
// let var2 = myArray[1];
// console.log("value of var1 is", var1);
// console.log("value of var2 is", var2);

let [var1,, var2,...myNewArray] = myArray;
console.log("value of var1 is", var1);
console.log("value of var2 is", var2);
// const myNewArray = myArray.slice(3);
console.log(myNewArray);