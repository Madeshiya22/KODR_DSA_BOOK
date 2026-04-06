// Given a sorted array of distinct elements, find the summation of absolute differences of all pairs in the given array. (Ex: arr[] = {1, 2, 3, 4}, Output: 10)
let arr = [1, 2, 3, 4];
let prefixsum = 0 ;
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    sum += arr[i] * i - prefixsum;
    prefixsum += arr[i];
}
console.log(sum)
