//Write a program to take two inputs a, b & find the value of a raised to the power of b. (Ex - a = 2, b = 5, OP - 2^5 = 32)
import promptSync from "prompt-sync";
const prompt = promptSync();
let a = Number(prompt("Enter the value of a: "));
let b = Number(prompt("Enter the value of b: "));
let result = Math.pow(a, b);
console.log(`${a} raised to the power of ${b} is: ${result}`);
