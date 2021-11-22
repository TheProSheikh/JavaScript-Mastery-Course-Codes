// use const for creating arrays

// heap memory ["mango","grapes"]
const fruits = ["mango", "grapes"];
// fruits = [];
fruits.unshift('date');
console.log(fruits);

//NOTE: *90% of developers use const in declaration of reference type 'cause if we redeclare that const then it'll give error such that no can make change to our program that could generate error easily*
//so we'll use const for reference type now everytime