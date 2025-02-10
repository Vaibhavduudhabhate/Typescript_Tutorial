//original js
// const year = document.getElemantById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datename", thisYear);
// year.textContent = thisYear

// 1st variation in ts
// let year : HTMLElement | null;
//  year = document.getElementById("year")
// let thisYear : string
// thisYear  = new Date().getFullYear().toString();
// if(year){
//     year.setAttribute("datename", thisYear);
//     year.textContent = thisYear
// }

// 2nd variation in ts
let year = document.getElementById("year") as HTMLSpanElement
let thisYear : string = new Date().getFullYear().toString();
if(year){
    year.setAttribute("datename", thisYear);
    year.textContent = thisYear
}