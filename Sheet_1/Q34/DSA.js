// Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)
import promptSync from "prompt-sync";
const prompt = promptSync();
let num = prompt("Enter a number: ");
console.log("Digits of the number:");   

for(let i = num.length - 1; i>=0; i--){
    console.log(num[i]);
}