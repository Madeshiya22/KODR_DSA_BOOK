//Linear Search an array - If element found print the index, else -1
let arr = [1, 2, 3, 4, 5];
let target = 3;
let index = -1;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] === target) {
        index = i;
        break;
    }
}
console.log(index);