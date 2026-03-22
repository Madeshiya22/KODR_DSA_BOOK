//Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)
import promtSync from "prompt-sync";
const prompt = promtSync();
let num = Number(prompt("Enter a number: "));
let temp = num;
let sum = 0;
while(temp > 0){
    let digit = temp % 10;  
    let factorial = 1;
    for(let i=1; i<=digit; i++){
        factorial *= i;
    }
    sum += factorial;
    temp = Math.floor(temp / 10);
}
if(sum === num){
    console.log(`${num} is a strong number.`);
}else {
    console.log(`${num} is not a strong number.`);
}
