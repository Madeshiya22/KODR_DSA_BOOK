//Sort Even and Odd Indices Independently
function sortEvenOdd(nums) {
    let even=[], odd=[];
    for(let i=0;i<nums.length;i++){
        if(i%2===0) even.push(nums[i]);
        else odd.push(nums[i]);
    }
    even.sort((a,b)=>a-b);
    odd.sort((a,b)=>b-a);

    let e=0,o=0;
    for(let i=0;i<nums.length;i++){
        nums[i] = i%2===0 ? even[e++] : odd[o++];
    }
    return nums;
}
console.log(sortEvenOdd([4,1,2,3])); // [2,3,4,1]