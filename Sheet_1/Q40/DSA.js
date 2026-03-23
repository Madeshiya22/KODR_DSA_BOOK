//Print \hello\" until user gives wrong input using do while"
import promptSync from "prompt-sync";
const prompt = promptSync();
let input;
do{
    input = prompt("Enter a string: ");
    if(input === "hello"){
        console.log(`You entered: ${input}`);
    }else{  
        console.log(`You entered: ${input}. Exiting...`);
    }
}while(input === "hello");
