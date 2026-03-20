// their is an array of numbers,[1,3,5,4] find the misssing number 

// their is two best solution for this problem
// 1. using sum of n natural numbers formula
// 2. using XOR operator

// using sum of natural numbers formula



// using XOR operator
let arr = [1, 3, 5, 4];
let n = arr.length + 1; 
let xor1 = 0;
let xor2 = 0;

for (let i=0;i<=n; i++){
    xor1 ^= i;
}
for (let i=0;i<arr.length; i++){
    xor2 ^= arr[i];
}

let missingNumber = xor1 ^ xor2;
console.log(missingNumber);