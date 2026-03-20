// Print all the factors of a number.
import promptSync from "prompt-sync";
const prompt = promptSync();
let n = Number(prompt("Enter a number: "));
console.log(`Factors of ${n} are: `);
let sum = 0;
let clutter = ''
for(let i=0; i<=n; i++){
    if(n%i===0){
        sum = sum + i; // it is extra from my side
        clutter += i + ' ';
        console.log(i);
    }
}
console.log(`Sum of factors: ${sum}`);
console.log(`Factors: ${clutter}`);