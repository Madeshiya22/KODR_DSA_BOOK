//Find surface area of sphere
import promptSync from "prompt-sync";
const prompt = promptSync();
let radius = parseFloat(prompt("Enter the radius of the sphere: "));
let surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
console.log(`The surface area of the sphere is: ${surfaceArea.toFixed(2)}`);