//Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.
let prompt = require('prompt-sync')();
let n = Number(prompt('Enter the size of the array: '));
let arr = [];
let sum = 0;
for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `)); // or arr.length bhi le sakte hai
    sum += arr[i];
}
let average = sum / n;
console.log(`Sum: ${sum}`);
console.log(`Average: ${average}`);

