//Print all the factors of a number.
import promptSync from "prompt-sync";
const prompt = promptSync();
let n = parseInt(prompt("Enter a number: "));
for(let i=1; i<=n; i++){
    if(n%i==0){
        console.log(i);
    }
}
