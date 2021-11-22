// how to clone array
// how to concatenate two array
let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(['item3','item4']);
// let array2 = ['item0'].concat(array1,['item3','item4']);
// New Way
// Spread Operator
let oneMoreArray = ['item4',"item5","item6"]
let array2 = ["item",...array1,"item3",...oneMoreArray];
array1.push('item3');

console.log(array1===array2)
console.log(array1);
console.log(array2);