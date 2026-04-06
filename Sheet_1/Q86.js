//Make Array Zero by Subtracting Equal Amounts
function minimumOperations(nums) {
    let set = new Set(nums);
    set.delete(0);
    return set.size;
}
console.log(minimumOperations([1,5,0,3,5])); // 3