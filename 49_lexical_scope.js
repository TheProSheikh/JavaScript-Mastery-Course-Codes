// lexical scope

myVar = "value1";

const myApp = function(){
    function  myFunc1() {
        // myVar = "value59";
        const myFunc2 = () => {
    
            console.log("inside myFunc2", myVar);
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc1();
}
myApp();