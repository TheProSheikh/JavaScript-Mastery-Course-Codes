// Spread Operator
// const array1 = [1,2,3];
// const array2 = [4,5,6];
// const newArray = [...array1,array2];
// const newArray = [...'1234567'];
// console.log(newArray);

// Spread Operator in Objects

const obj1 = {
    key1 : "value1",
    key2 : "value2",
}
const obj2 = {
    key1 : "valueUnique",
    key3 : "value3",
    key4 : "value4",
}
// const newObj = {...obj2,...obj1,key8 : "Value8"};
// const newObj = {...["item1","item2"]}; //NOTE:if we don't define key to any value then its index will be the key
const newObj = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(newObj[24]);