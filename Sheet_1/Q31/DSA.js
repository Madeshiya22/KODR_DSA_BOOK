//Print the sum of all factors of a number (Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)
import promptSync from "prompt-sync";
const prompt = promptSync();
let num = Number(prompt("Enter a number: "));
let sum = 0;
for(let i=1; i<num; i++){
    if(num%i === 0){
        sum=sum+i;
        console.log(i);
    }
}
console.log(`Sum of factors of ${num} is: ${sum}`);