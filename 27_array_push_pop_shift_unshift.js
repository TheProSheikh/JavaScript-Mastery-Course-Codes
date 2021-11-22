//array push pop
//array.push :to add item in the last
let fruits = ["apple", "mango", "guava"];
console.log(fruits);
// fruits.push('banana');

//pop :to remove last item in array
// let poppedFruit =fruits.pop();
// console.log(fruits);
// console.log("popped fruit is ", poppedFruit)


//unshift: add item in start
// fruits.unshift('banana','papea');
// console.log(fruits);

//shift: add item in start
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruit is ", removedFruit);

document.write("Push & pop are fast as compare to Shift Unshift <br> because firstly, it'll move the items and then add or remove from the start")