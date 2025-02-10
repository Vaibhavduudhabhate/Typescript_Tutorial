// Type Alices
type stringOrNumber = string | number ;

type stringOrNumberArray = (string|number)[];

type Guitarist = {
    name? : string,
    active : boolean,
    albums : stringOrNumberArray
}

type userId = stringOrNumber;

// Literal Types 
let myName : 'Dave';

let userName : 'Dave' | 'John' | 'Amy' 
userName = "Amy";


//functions 
const add = (a:number,b:number): number =>{
    return a + b;
}

const logMsg = (message : any): void =>{
    console.log(message);
}

logMsg('hello')
logMsg(add(4,5));
logMsg(add(9,5));
logMsg('Hey Vaibhav');

let subtract = function (c: number ,d: number):number{
    return c - d
}
logMsg(subtract(6,3))
type mathFunction = (a: number , b: number)=>number

// interface mathFunction{
//     (a:number , b:number):number
// }

let multiply : mathFunction = function(c,d) {
    return c * d
}  

logMsg(multiply(2 ,3))

// Optional parameters

const addAll = (a:number ,b:number ,c:number): number =>{
    // return a + b + c ;
    if(typeof c !== undefined){
        return a + b + c;
    }
    return a + b ;
}

const sumAll = (a:number ,b:number ,c:number = 2): number =>{
    return a + b + c ;
}


logMsg(addAll(2 ,4,6))
logMsg(sumAll(4,5,6))