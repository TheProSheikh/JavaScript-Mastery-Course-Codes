// nested if else

// winning number = 19

// 19 your guess is right
// 17 too low
// 20 too high

let winningNumber = 19;
let userGuess = +prompt("Enter a Number: ") // prompt will always get string values so we have to change its datatype by ourself
if(userGuess === winningNumber){
    console.log("Your guess is right😄!!!")
}else{
    if(userGuess < 19){
        console.log("too low 😑!!!")
    }else{
        console.log("too high 😐!!!")
    }
}