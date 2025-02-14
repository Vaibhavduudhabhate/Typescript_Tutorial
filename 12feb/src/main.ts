// Index Signatures

interface TransactionObj{
    [key: string]: number;
    Pizza:number,
    Books:number,
    Job:number
}

const todaysTransactions: TransactionObj = {
    Pizza : -10,
    Books : -5,
    Job : 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions["Job"])

// let prop: string = "pizza"

const todaysNet = (transactions : TransactionObj): number =>{
    let total = 0
    for(const transaction  in transactions){
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

// console.log(todaysTransactions['red'])