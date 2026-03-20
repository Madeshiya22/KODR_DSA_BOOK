//Sum of digits of a number (Ex: 936 = 18)
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let num = Number(prompt("Enter a number: "));
let sum = 0;
for(let i = num; i > 0; i = Math.floor(i / 10)) { // Math.floor is used to remove the last digit after adding it to the sum 
    sum += i % 10;
}
console.log(`The sum of the digits is: ${sum}`);