//      Accept a number and print its reverse
import promptSync from "prompt-sync";
const prompt = promptSync();
let num = Number(prompt("Enter a number: "));
let reverse = 0;
for(let i=num; i>0; i=Math.floor(i/10)){
    reverse= reverse*10 + i%10;
}
console.log("Reverse of the number is: " + reverse);