// Accept the User's name, age and print in following manner (Ex - Hello Shery, you are 12 years old.)
import promptSync from 'prompt-sync';
const prompt = promptSync();
let name = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));
console.log(`Hello ${name}, you are ${age} years old.`);
