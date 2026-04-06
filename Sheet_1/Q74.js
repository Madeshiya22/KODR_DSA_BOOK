//You are given two arrays of **equal length**: An **integer array** A[] and a **character array** B[], where each character is one of 'a', 'b', or 'c'. Find the **minimum** value of the expression: min(sum of values linked with 'a' + sum of values linked with 'b', sum of values linked with 'c').

import PromptSync from "prompt-sync";
const prompt = PromptSync();

// 🔹 Input length
let n = Number(prompt("Enter size of array: "));

// 🔹 Input array A (numbers)
let A = prompt("Enter numbers (space separated): ")
          .split(" ")
          .map(Number);

// 🔹 Input array B (characters)
let B = prompt("Enter characters (a b c): ")
          .split(" ");

// 🔹 Initialize sums
let sumA = 0, sumB = 0, sumC = 0;

// 🔹 Loop
for (let i = 0; i < n; i++) {
    if (B[i] === 'a') sumA += A[i];
    else if (B[i] === 'b') sumB += A[i];
    else if (B[i] === 'c') sumC += A[i];
}

// 🔹 Final result
let result = Math.min(sumA + sumB, sumC);

// 🔹 Output
console.log("Result:", result);