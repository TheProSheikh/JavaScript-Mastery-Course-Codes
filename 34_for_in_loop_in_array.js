//for in loop in array
const fruits = ["apple", "mango", "grapes","pinaapple","kiwi"];
const fruits2 = [];
for(index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);

document.write("for in loop is use to get the index of elements in arrays and after getting the index we can change it to get our desired OUTPUT")