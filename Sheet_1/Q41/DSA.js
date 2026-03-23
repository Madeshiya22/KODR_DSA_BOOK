//Make a choice based calculator using do while
import promptSync from "prompt-sync";
const prompt = promptSync();
let choice;
do{
    console.log("Menu:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");
    choice = Number(prompt("Enter your choice: "));
}
while(choice < 1 || choice > 5);
if(choice === 5){
    console.log("Exiting...");
}else{
    let num1 = Number(prompt("Enter first number: "));
    let num2 = Number(prompt("Enter second number: "));
    switch(choice){
        case 1:
            console.log(`Result: ${num1 + num2}`);
            break;
        case 2:
            console.log(`Result: ${num1 - num2}`);
            break;
        case 3:
            console.log(`Result: ${num1 * num2}`);
            break;
        case 4:
            console.log(`Result: ${num1 / num2}`);
            break;
    }
}
