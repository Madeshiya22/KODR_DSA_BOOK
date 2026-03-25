//Array Reverse Without Using Extra space
let arr = [12,56,78,34,67];
let i =0;
let j = arr.length-1;
while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log("reversed array");
console.log(arr);