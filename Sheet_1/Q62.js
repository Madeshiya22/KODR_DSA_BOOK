//Array Reverse Without Using Extra space
 let arra = [12,56,78,34,67];
let start =0;
let end = arra.length-1;
while(start<end){
    let temp = arra[start];
    arra[start] = arra[end];
    arra[end] = temp;
    start++;
    end--;
}
console.log("reversed array");
console.log(arra);


//2nd method

let arr = [12,56,78,34,67];
let i =0; 
let j = arr.length-1;

for(i=0; i<j; i++){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
     j--
}
console.log(arr);









































