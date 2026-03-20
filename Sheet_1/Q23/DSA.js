// Accept an integer and Print \Hello World\" n times"
import promptSync from "prompt-sync";

const prompt = promptSync();
 let n = Number(prompt("Enter an integer: "));
 for(let i =1 ; i<=n; i++){
    console.log(i + ". Hello World");
 }