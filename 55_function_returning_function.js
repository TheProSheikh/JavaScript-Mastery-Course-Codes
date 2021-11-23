// function returning function
function myFunc() {
    // function hello() {
    //     console.log("hello world");
    // }
    // return hello;
    return function(){
        return "hello world"
    }
}
const ans = myFunc();
console.log(ans());