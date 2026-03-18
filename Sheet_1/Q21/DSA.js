
//21. Bijli Bill

let ElectUnit = Number(prompt('Enter the number of units consumed:'));
let billAmount = 0;

console.log(ElectUnit <= 100 ? billAmount = ElectUnit * 5 :
ElectUnit > 100 && ElectUnit <= 200 ? billAmount = (100 * 5) + ((ElectUnit - 100) * 7) :
billAmount = (100 * 5) + (100 * 7) + ((ElectUnit - 200) * 10));

console.log(`The total bill amount is: ${billAmount}`); 
