//Accept the three sides of triangle and calculate the area using Heron's formula
import promptSync from "prompt-sync";
const prompt = promptSync();
function calculateArea(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
const side1 = parseFloat(prompt("Enter the length of the first side: "));
const side2 = parseFloat(prompt("Enter the length of the second side: "));
const side3 = parseFloat(prompt("Enter the length of the third side: "));
const area = calculateArea(side1, side2, side3);
console.log(`The area of the triangle is: ${area.toFixed(2)}`);