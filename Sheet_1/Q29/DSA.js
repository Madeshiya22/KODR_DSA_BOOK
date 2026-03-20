// Print the sum of all even & odd numbers in a range separately.
import promptSync from "prompt-sync";
const prompt = promptSync();
let n = parseInt(prompt("Enter a number: "));
let evenSum = 0;
let oddSum = 0;
for(let i=1; i<=n; i++){
    if(i%2==0){
        evenSum = evenSum + i;
    }
    else{
        oddSum = oddSum + i;
    }
}
console.log(`Sum of even numbers: ${evenSum}`);
console.log(`Sum of odd numbers: ${oddSum}`);