// default parameters
// function addTwo(a,b) {
//     if(typeof b === "undefined"){
//      b = 0;   
//     }
//         return a+b;
// }

function addTwo(a,b=1) {
        return a+b;
}
const ans = addTwo(6);
console.log(ans);