// Solve Increment & decrement operator questions
import promptSync from 'prompt-sync';
const prompt = promptSync();
let num = parseInt(prompt("Enter an integer:"));
// Increment operator
num++;
console.log(`After incrementing, the value is: ${num}`);
// Decrement operator
num--;
console.log(`After decrementing, the value is: ${num}`);

