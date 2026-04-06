//Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)
let arr = [];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

let secondMax = -Infinity;  
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > secondMax && arr[i] < max) {
    secondMax = arr[i];
  }
}

console.log(" the second greatest value is: " + secondMax);

// let arr = [2, 96, 69, 77, 145, 20];
// let max = Math.max(arr[0], arr[1]); 
// let secondMax = Math.min(arr[0], arr[1]);
// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     secondMax = max;
//     max = arr[i];
//   }
//   else if(arr[i] > secondMax && arr[i] !== max){
//     secondMax = arr[i];
//   }
// }
// console.log("second greatest value is: " +` ${secondMax}`)