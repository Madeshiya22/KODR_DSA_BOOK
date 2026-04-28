//Array Reverse Without Using Extra space
//  let arr = [12,56,78,34,67];
// let start =0;
// let end = arr.length-1;
// while(start<end){
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
// }
// console.log("reversed array");
// console.log(arr);


//2nd method

// let arr = [12,56,78,34,67];
// let i =0; 
// let j = arr.length-1;

// for(i=0; i<j; i++){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//      j--
// }
// console.log(arr);



let arr = [12,56,78,34,67];
let i  =0;
let j = arr.length-1;
while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);



































