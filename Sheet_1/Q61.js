// Array left rotation by K elements
let arr = [1,2,3,4,5];
let k = 3; // rotation by 3 elements 
for (let j = 0; j < k; j++) {
    let temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) { 
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
}
console.log(arr);
    