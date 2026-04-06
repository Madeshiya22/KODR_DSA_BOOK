
let arr = [1, 2, 1, 2, 1, 3];
let n = arr.length;

let leftSum = 0;
let rightSum = 0;

// left half
for (let i = 0; i < n / 2; i++) {
    leftSum += arr[i];
}

// right half
for (let i = n / 2; i < n; i++) {
    rightSum += arr[i];
}

// difference
let result = Math.abs(leftSum - rightSum);

console.log("Minimum value to add:", result);