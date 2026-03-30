
// Binary Search. If element found print the index, else -1
let arr = [1, 2, 3, 4, 5, 6, 7, 88, 99, 100];
let target = 88;
let left = 0;
let right = arr.length - 1;
let foundIndex = -1;
while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        foundIndex = mid;
        break;
    } else if (arr[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;

    }
}
console.log(foundIndex)