//Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)
import promptSync from "prompt-sync";
const prompt = promptSync();
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));
console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
// Swapping without using third variable    
num1 = num1 + num2; // num1 now holds the sum of num1 and num2
num2 = num1 - num2;
num1 = num1 - num2;
console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);
