//GCD of Array
function gcd(a,b){
    return b === 0 ? a : gcd(b, a % b);
}
function findGCD(nums){
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    return gcd(min, max);
}
console.log(findGCD([2,5,6,9,10])); // 2