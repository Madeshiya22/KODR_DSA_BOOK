//Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)
import promtSync from "prompt-sync";
const prompt = promtSync();
let num = parseInt(prompt("Enter a number: "));
let temp = num;
let sum = 0;

