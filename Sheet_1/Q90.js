//11. Minimum Sum of Four Digit Number
function minimumSum(num) {
    let arr = num.toString().split('').map(Number).sort((a,b)=>a-b);
    return (arr[0]*10 + arr[2]) + (arr[1]*10 + arr[3]);
}
console.log(minimumSum(2932)); // 52