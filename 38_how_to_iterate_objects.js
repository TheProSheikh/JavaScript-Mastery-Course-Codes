// how to iterate objects
const person = {
    name: "Sheikh",
    age: 20,
    "person hobbies": ['sleeping', 'typing', 'coding']
};
// for in loop
// object.keys 

// for(key in person){
//     console.log(`${key}: ${person[key]}`);
//     // console.log(key,":", person[key]);
// }


// console.log(Object.keys(person));
// const val = Array.isArray(Object.keys(person));
// console.log(val);

for(key of Object.keys(person)){
    console.log(key,":", person[key]);
}