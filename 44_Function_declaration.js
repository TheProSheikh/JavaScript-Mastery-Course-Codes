document.write("<h1>Fuction Declaration:Most Important</h1>")

function singHBD(){
    console.log("Happy Birthday to you....")
}
function sum3Numbers(n1,n2,n3){
    return n1+n2+n3;
}
// console.log(sum3Numbers(21,12,2000))
function isEven(num){
    
    return num % 2=== 0 ? "Its even number" : "not even number";
// }
// console.log(isEven(30))
// singHBD();

// funtion
// input : string
// output: first character

function firstChar(anyStr){
    return anyStr[1];
}
// console.log(firstChar('sheikh'));

// function 
// input: array, target(number)
// output: index of target if present in array

function targetFind(num_array,target){
    for(let i=0; i<num_array.length; i++){
        if(num_array[i]===target){
            return i;
        }
        
    }
    return "Target not found";
}
// const myArray = [1,2,8,12,90, 32];
// const ans = targetFind(myArray, 32);
// console.log(ans);