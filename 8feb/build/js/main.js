"use strict";
// Type assertions and type casting
// convert to more or less specific
let a = 'hello';
let b = a;
let c = a;
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// be careful in such case ts has no problem but it will return a string;
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string;
10; // this is called double casting
// The DOM
const img = document.querySelector('img');
const MyImg = document.getElementById('img');
const nextImg = document.getElementById('img');
// img?.src
// MyImg.src
