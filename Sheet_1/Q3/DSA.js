// Accept two integers from user and print the sum (Ex - The sum of 45 & 12 = 57)
import promptSync from 'prompt-sync';
const prompt = promptSync();
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
let sum = num1 + num2;
console.log(`The sum of ${num1} & ${num2} = ${sum}`);

