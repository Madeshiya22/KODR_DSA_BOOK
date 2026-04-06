//Build Array from Permutation
let nums = [0, 2, 1, 5, 3, 4];
let ans = new Array(nums.length);
for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
}
console.log("Resulting array: ");
console.log(ans);

    