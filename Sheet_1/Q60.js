//Array left Rotation by 1

let arr = [65, 76, 35, 64, 64, 45, 34, 23, 12];
let temp = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
arr[arr.length - 1] = temp;
console.log(arr);



