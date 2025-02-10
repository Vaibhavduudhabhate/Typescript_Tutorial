"use strict";
// Literal Types 
let myName;
let userName;
userName = "Amy";
//functions 
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello');
logMsg(add(4, 5));
logMsg(add(9, 5));
logMsg('Hey Vaibhav');
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(6, 3));
// interface mathFunction{
//     (a:number , b:number):number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
// Optional parameters
const addAll = (a, b, c) => {
    // return a + b + c ;
    if (typeof c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 4, 6));
logMsg(sumAll(4, 5, 6));
logMsg(sumAll(1,2,3))