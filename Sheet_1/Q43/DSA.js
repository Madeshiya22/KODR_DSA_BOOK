// Question 22 using Switch (Check Consonant or Vowel using Switch)
import promptSync from "prompt-sync";
const prompt = promptSync();
let char = prompt("Enter a character: ");
switch(char.toLowerCase()){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(char + " is a vowel.");
        break;
    default:
        console.log(char + " is a consonant.");
}