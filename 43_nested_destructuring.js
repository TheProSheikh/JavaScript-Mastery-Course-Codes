// Nested Destructuring

const users = [
    {userId: 1, name : "Sheikh", gender: "male"},
    {userId: 2, name : "Ali", gender: "male"},
    {userId: 3, name : "Sarah", gender: "female"},
]
const [,{gender:var1, userId : id2} , {name:var2}] = users;
console.log(var1, id2)
console.log(var2)
