document.write("<h1>Fuction Expression:Important topic</h1>")
// function expression

// function singHBD(){

//     console.log("Happy Birthday to you....");
// }
var singHappyBD = function(){

    console.log("Happy Birthday to you....");
}
singHappyBD();

const  sum3Numbers= function(n1,n2,n3){
    return n1+n2+n3;
}
const ans = sum3Numbers(3,5,5); 
console.log(ans)

// function isEven(num){
    
//     return num % 2=== 0 ? "Its even number" : "not even number";
// }

const isEven = function(num){
    return num %2===0;
    // return num %2 ===0 ? "Its even" : "not even";
}
console.log(isEven(4))

// function firstChar(anyStr){
//     return anyStr[1];
// }

const firstChar = function(anyStr){
    return anyStr[0];
}
console.log(firstChar("MR Adeel"));

// function targetFind(num_array,target){
//     for(let i=0; i<num_array.length; i++){
//         if(num_array[i]===target){
//             return i;
//         }
        
//     }
//     return "Target not found";
// }

const targetFind = function(num_array, target){
    for(i=0; i<num_array.length; i++){
        if(num_array[i] === target){
            return i;
        }
    }
    return "target not found";
}

const myArray = [1,3,5,21,07,24];
let answer = targetFind(myArray, 24);
console.log(answer);