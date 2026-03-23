// Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)
import promptSync from "prompt-sync";
const prompt = promptSync();
let num = Number(prompt("Enter a number: "));
let square = num * num;
let tempnum = num;
let tempsquare = square;
 let isAutomorphic = true;
 while(tempnum>0){
    let lastDigitNum = tempnum % 10;
    let lastDigitSquare = tempsquare % 10;
    if(lastDigitNum != lastDigitSquare){
        isAutomorphic = false;
        break;
    }
    tempnum = Math.floor(tempnum / 10);
    tempsquare = Math.floor(tempsquare / 10);
 }
    if(isAutomorphic){
        console.log(`${num} is an automorphic Number`)
    }else{
        console.log(`${num} is not a automorphic Number`)
    }
    