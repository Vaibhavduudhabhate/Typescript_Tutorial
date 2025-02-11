// Type assertions and type casting

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a:  One = 'hello';
let b = a as Two;
let c = a as Three;
let d = <One>'world'
let e = <string|number>'world';

const addOrConcat = (a: number , b: number , c: 'add' | 'concat') : number | string =>{
    if(c === 'add') return a+b;
    return '' + a + b;
}

let myVal : string = addOrConcat(2,2,'concat') as string;

// be careful in such case ts has no problem but it will return a string;
let nextVal : number = addOrConcat(2,2,'concat') as number;

// 10 as string;
(10 as unknown) as string;// this is called double casting


// The DOM
const img = document.querySelector('img')
const MyImg = document.getElementById('img') as HTMLImageElement;
const nextImg  = <HTMLImageElement>document.getElementById('img');

// img?.src
// MyImg.src