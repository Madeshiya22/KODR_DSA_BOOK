//Given an array of integers, update every element with the multiplication of previous and next elements with the following exceptions: a) The First element is replaced by the multiplication of the first and second. b) The last element is replaced by multiplication of the last and second last. (Ex: Input : arr[] = {2, 3, 4, 5, 6}, Output : arr[] = {6, 8, 15, 24, 30})
let arr = [2, 3, 4, 5, 6];
let n = arr.length;

let result = new Array(n);

// first element
result[0] = arr[0] * arr[1];

// middle elements
for (let i = 1; i < n - 1; i++) {
    result[i] = arr[i - 1] * arr[i + 1];
}

// last element
result[n - 1] = arr[n - 1] * arr[n - 2];

console.log(result);