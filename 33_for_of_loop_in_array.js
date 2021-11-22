// for of loop in arrays
const fruits = ["apple", "mango", "grapes"];
fruits2 = [];
for(fruit of fruits){
    fruits2.push(fruit.toUpperCase());
};
console.log(fruits2);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i].toUpperCase());
}

document.write("for of loop and traditional for loop uses much more than other loops")
