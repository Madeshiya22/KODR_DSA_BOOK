//Accept a number and check if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)
import promptSync from "prompt-sync";
const prompt = promptSync();
let num = Number(prompt("Enter a number: "));
let temp = num;
let rev = 0;
while (temp > 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
}
if (num === rev) {
    console.log(`${num} is a palindromic number.`);
}
else {    console.log(`${num} is not a palindromic number.`);
}