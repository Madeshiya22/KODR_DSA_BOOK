//Check if the number is Prime or not.
import promptSync from "prompt-sync";
const prompt = promptSync();
let num = Number(prompt("Enter a number: "));
for(let i=2; i<num; i++){
    if(num%i !== 0 && num%num === 0){
        console.log(`${num} is a prime number.`);
        break;
    }else {
        console.log(`${num} is not a prime number.`);
        break;
    }
}
