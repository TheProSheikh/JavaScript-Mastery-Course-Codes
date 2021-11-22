// Block Scope Vs Function Scope

// let and const are block scope
// var is function scope

// if(true){
//     var firstName = "sheikh";
//     console.log(firstName)
// }

// console.log(firstName)
// let firstName = "sheikh";
function  myApp() {
    if(true){
        var firstName = "Adeel";
        console.log(firstName)
    }
    console.log(firstName)
    {
        console.log(firstName)
    }
}
myApp();