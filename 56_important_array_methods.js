// important array methods

// foreach

const numbers = [4,2,6,12,21];
// function multiplyBy2(number, index) {
//     console.log(`index is ${index} and number is ${number}`);
//     console.log(`${number}*2 = ${number*2}`);
// }


// numbers.forEach(function(number, index){
//     console.log(`number is ${number} and index is ${index}`);
//     console.log(`${number}*2 = ${number*2}`);
// });


// numbers.forEach(function(number, index){
//     console.log(number, number*3)
// })

const users = [
    {firstName: "Adeel", age: 20},
    {firstName: "usama", age: 18},
    {firstName: "ali", age: 23},
    {firstName: "abid", age: 19},
]
users.forEach(function(user){
    console.log(user.firstName);
})
    // map
    // filter 
    // reduce