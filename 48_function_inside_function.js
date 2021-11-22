// function inside function

const app = () => {
    function myFunc() {
        console.log("hello from myFunc");   
    }
    const sum = function(n1,n2){
        return n1+n2;
    }
    const mul = (n1,n2) => {
        return n1*n2;
    
    }
    console.log("inside app");
    myFunc();
    console.log(sum(2,4))
    console.log(mul(2,4))
}
app();