//Maximum Number of Pairs in Array\function maxPairs(nums) {
   function maxPairs(nums){
     let map = {}, pairs = 0;

    for (let n of nums) {
        map[n] = (map[n] || 0) + 1;
        if (map[n] === 2) {
            pairs++;
            map[n] = 0;
        }
    }
    return pairs;
}
console.log(maxPairs([1,3,2,1,3,2,2])); // 3