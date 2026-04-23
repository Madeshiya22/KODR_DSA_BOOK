//  Move all the negative elements on the left side and positive elements on the right side O(n).
let arr = [1, -2, 3, -4, 5, -6, 7, -88, 99, -100];
let  j = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
}
console.log(arr);