//Project - Guess Game using Do...While Loop
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let num = Number(prompt("Guess a number between 1 and 10: "));
let randomNum = Math.floor(Math.random() * 10) + 1;
let guessedCorrectly = false;

do {
    num = Number(prompt("Guess a number between 1 and 10: "));
    if (num === randomNum) {
        console.log("Congratulations! You guessed the number.");
        guessedCorrectly = true;
    } else {
        console.log("Sorry, the number was " + randomNum + ". Try again!");
    }
} while (!guessedCorrectly);