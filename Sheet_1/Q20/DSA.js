//20. Shop discount

let billAmount = Number(prompt('Enter the total bill amount:'));
let discountPercentage = Number(prompt('Enter the discount percentage:'));

let discountAmount = (billAmount * discountPercentage) / 100;
let finalAmount = billAmount - discountAmount;

console.log(finalAmount);

// if price is greater than then 500 discount is 10% and if price is greater than 1000 then discount is 20% 

let bill_Amount = Number(prompt('Enter the total bill amount:'));
let discount_Percentage;
console.log(" discount Amount: " +  bill_Amount >= 1000 ? discount_Percentage = 20 : bill_Amount >= 500 ? discount_Percentage = 10 : discount_Percentage = 0)
let discount_Amount = (bill_Amount * discount_Percentage) / 100;
let final_Amount = bill_Amount - discount_Amount;
console.log(final_Amount)