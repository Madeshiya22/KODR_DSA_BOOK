//Highest Altitude
function largestAltitude(gain) {
    let max = 0, sum = 0;
    for (let g of gain) {
        sum += g;
        max = Math.max(max, sum);
    }
    return max;
}
console.log(largestAltitude([-5,1,5,0,-7])); // 1