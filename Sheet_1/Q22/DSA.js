//Accept an English alphabet from user and check if it is a consonant or a vowel.

import promptSync from "prompt-sync";

const prompt = promptSync();
let char = prompt("Enter an English alphabet: ").toLowerCase();

if (char.length !== 1 || char < "a" || char > "z") {
  console.log("Invalid input");
} else if ("aeiou".includes(char)) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}