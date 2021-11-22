// rest parameters

// const myFunc= function(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is `,c);
// }
// myFunc(1,2,3,4,5,6,7,8)

// My solution 
const sumAll = (...nums) => {
   for(num of nums){
    num = num + num
}
    console.log(num)
    console.log(Array.isArray(nums))
}
sumAll(1,2,3,5)

// mentor solutin
function addAll(...numbers) {
    let total =0;
    for(let number of numbers){
        total = total + number;
    }
    console.log(total);
}
addAll(21,12,2000)