const numbers : number[] = [1,2,3,4,5];
// ! console.log(numbers)

// !--------------------------------------------------------

// ? double the all numbers in  array
const DoubleData:number[] = numbers.map((currVal)=> currVal * 2)
console.log(DoubleData)

// !--------------------------------------------------------

// ? Converting  Number to string

const numberToString = numbers.map((currElm: number)=> currElm.toString())
console.log(numberToString)

// !--------------------------------------------------------

// todo