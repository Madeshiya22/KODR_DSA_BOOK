function divideArray(nums) {
    let map = {};
    for (let n of nums) map[n] = (map[n] || 0) + 1;

    for (let key in map) {
        if (map[key] % 2 !== 0) return false;
    }
    return true;
}
console.log(divideArray([1,2,2,1])); // true