//Special number using methods.
import PromptSync from "prompt-sync";
const prompt = PromptSync();
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
function isSpecialNumber(num) {
    let sum = sumOfDigits(num);
    if (sum === 0) return false;
    return num % sum === 0;
}
let number = Number(prompt('Enter a number: '));
if (isSpecialNumber(number)) {
    console.log(`${number} is a Special number.`);
}
else {
    console.log(`${number} is not a Special number.`);
}
