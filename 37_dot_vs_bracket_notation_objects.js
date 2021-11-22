document.write("<h1>Dot Vs Bracket Notation in Objects</h1>")
const key = "email";
const person = {
    name: "Sheikh",
    age: 20,
    "person hobbies": ['sleeping', 'typing', 'coding']
}
// console.log(person['person hobbies']);
person[key] = "sheikh@gmail.com"; // NOTE:here we add quotes to the "key" then we won't get 'email' as a key in object so we'll just simply add brackets to the [key]
console.log(person)
