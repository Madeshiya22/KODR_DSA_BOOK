// Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)
import promptSync from "prompt-sync";
const prompt = promptSync();
let principal = parseFloat(prompt("Enter the principal amount: "));
let rate = parseFloat(prompt("Enter the annual interest rate (in percentage): "));
let time = parseFloat(prompt("Enter the time in years: "));
let compoundInterest = principal * Math.pow((1 + rate / 100), time) - principal;
console.log("The Compound Interest is: " + compoundInterest.toFixed(2));
