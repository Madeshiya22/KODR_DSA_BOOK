//Check if array is sorted in increasing order or not. (Ex 1 - { 1, 5, 8, 9, 10, 15 } - OP = \YES\"

let arr = [1, 5, 8, 9, 10, 15];
let isSorted = true;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        break;
    }
    console.log(arr[i]);
}

if (isSorted) {
  console.log("YES");
} else {
  console.log("NO");
}