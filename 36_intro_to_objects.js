document.write('<h1>Intro to Objects</h1>');
// Objects (reference type)
// Objects are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects
// const person = { 'name': "Sheikh", 'age': 20 };
const person = { name: "Sheikh",
                 age: 20,
                 hobbies: ['sleeping','typing','coding']};
console.log(person);
// how to access data from objects

// console.log(person.name)
// console.log(person.age)
//another way 
console.log(person["name"])
console.log(person['age'])
// console.log(person.hobbies); // we can treat it like normal array

// how to add key value pair to objects
console.log('after adding new key value pair');
person["gender"] = "male";
console.log(person);