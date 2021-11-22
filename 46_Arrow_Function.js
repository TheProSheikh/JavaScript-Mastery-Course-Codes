document.write("<h1>Arrow Fuction :Very Important topic most used in React</h1>")
// Arrow function: most used in React

// const singHappyBD = function(){
//     console.log("Happy Birthday to you....");
// }

const singHappyBD = () => {
    console.log("Happy Birthday to you....");
}
singHappyBD();

// const  sum3Numbers= function(n1,n2,n3){
//     return n1+n2+n3;
// }
const  sum3Numbers= (n1,n2,n3) => {
    return n1+n2+n3;
}
const ans = sum3Numbers(21,12,2000); 
console.log(ans)


// const isEven = function(num){
//     // return num %2===0;
//     return num %2 ===0 ? "Its even" : "not even";
// }
const isEven = (num) =>  num %2===0;
    // return num %2 ===0 ? "Its even" : "not even";

console.log(isEven(5));

// const firstChar = function(anyStr){
//     return anyStr[0];
// }
const firstChar = (anyStr) => anyStr[4];

console.log(firstChar("Sheikh"));

// const targetFind = function(num_array, target){
//     for(i=0; i<num_array.length; i++){
//         if(num_array[i] === target){
//             return i;
//         }
//     }
//     return "target not found";
// }
const targetFind = (num_array, target) =>{
    for(i=0; i<num_array.length; i++){
        if(num_array[i] === target){
            return i;
        }
    }
    return "target not found";
}

const myArray = [1,3,5,21,07,24];
let answer = targetFind(myArray, 5);
console.log(answer);