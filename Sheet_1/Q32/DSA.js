//Check if the number is Prime or not.
import promptSync from "prompt-sync";
const prompt = promptSync();
let num = Number(prompt("Enter a number: "));
let isPrime = true;
if(num <= 1){
    isPrime = false;
}
for(let i=2; i<=Math.sqrt(num); i++){
    if(num % i === 0){
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log(num + " is a prime number.");
}else{
    console.log(num + " is not a prime number.");
}