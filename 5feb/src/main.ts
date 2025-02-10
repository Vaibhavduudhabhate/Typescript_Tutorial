// rest Parameter

const total = (...nums : number[]) =>{
    return nums.reduce((prev ,curr)=>prev + curr)
}
console.log(total(1,2,3,4,5))

// Never Type

const createError =  (errMsg:string): never =>{
    throw new Error(errMsg)
}

const infinite = () =>{
    let i : number = 1
    while(true){
        i++
        if (i > 100) break;
    }
}

// Custom Type Guard
const isNumber = (value:any): boolean =>{
    return typeof value === "number"
    ? true : false
}

// Use of the never Type
const numberString = (value:string | number): string => {
    if (typeof value == 'string') return 'string'
    if (typeof value == 'number') return 'number'
    return createError('Create Error Log')
}