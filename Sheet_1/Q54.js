//Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.
// let n = 5;
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < n; i++) {
//     sum += arr[i];
// }
// console.log("Sum: " + sum);
// console.log("Average: " + sum / n);



//==========or===========
import promptSync from "prompt-sync";
const prompt = promptSync();
let n = Number(prompt("Enter the size of the array: "));
let arr = [];
let sum = 0; 
for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt("Enter element " + (i + 1) + ": "));
    sum += arr[i];
}
console.log("Sum: " + sum);
console.log("Average: " + sum / n);