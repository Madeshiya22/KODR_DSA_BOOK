//Print Weekday using Switch using DoWHile
import promptSync from "prompt-sync";
const prompt = promptSync();
let day;
do {
    day = Number(prompt("Enter a number (1-7) to get the corresponding weekday: "));
} while (day < 1 || day > 7);
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("sunday")
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
}


