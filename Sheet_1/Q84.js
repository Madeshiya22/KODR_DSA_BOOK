// Smallest Index With Equal Value
function smallestIndex(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) return i;
    }
    return -1;
}
console.log(smallestIndex([0,1,2])); // 0