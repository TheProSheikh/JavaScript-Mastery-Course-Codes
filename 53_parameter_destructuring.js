// parameter_destructuring

// Objects
// react

const person = {
    name: "sheikh",
    gender: "male",
    age: 5012
}

// function printDetails(obj) {
//     console.log(obj.name);
//     console.log(obj.gender);
// }
function printDetails({name, gender, age}) {
    console.log(name);
    console.log(gender);
    console.log(age);
}

printDetails(person)