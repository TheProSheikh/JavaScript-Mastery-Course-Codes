// object inside array 
// very useful in real world  application
const users = [
    {userId: 1, name : "Sheikh", gender: "male"},
    {userId: 2, name : "Ali", gender: "male"},
    {userId: 3, name : "Sarah", gender: "female"},
]

for(user of users){

    console.log(user.name)
}