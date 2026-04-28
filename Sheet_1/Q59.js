//Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

// let arr = [1, 2, 3, 4, 5];
// let reversedArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
// }
// console.log("Original Array: " + arr);
// console.log("Reversed Array: " + reversedArr);  

import promptSync from "prompt-sync";
const prompt = promptSync();
let n = Number(prompt("Enter the number of elements: "));
let arr = new Array(n);
for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt("Enter element " + (i + 1) + ": "));
}

let temp = new Array(n);
let i = arr.length-1;
for(let j = 0; j<arr.length; j++){
  temp[j] = arr[i];
  i--;
}
console.log("Original Array: " + arr);
console.log("Reversed Array: " + temp);