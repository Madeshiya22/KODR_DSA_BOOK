//Move all the negative elements on the left side and positive elements on the right side O(n).
let arr = [1, -2, 3, -4, 5, -6];
let left = 0;
let right = arr.length - 1;
while (left < right) {
    while (arr[left] < 0 && left < right) {
        left++;
    }
    while (arr[right] >= 0 && left < right) {
        right--;
    }
    if (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
console.log("Array after rearrangement: ");
console.log(arr);
