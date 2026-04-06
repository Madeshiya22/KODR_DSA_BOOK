//Find sum of minimum absolute difference of the given array
let arr = [5, 2, 8, 7, 1, 3];

// step 1: sort
arr.sort((a,b)=>a-b);

let sum = 0;

// step 2: difference
for(let i = 1; i < arr.length; i++){
    sum += Math.abs(arr[i] - arr[i-1]);
}

console.log(sum);