// callback function 
const myFunc2 = function(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("Hi I am Func and I can do .....")
    callback("MrSheikh");
    // console.log(callback);
}
myFunc(myFunc2);