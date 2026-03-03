/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let sort = nums.sort((a,b)=>{return a-b});
    for(let i=1; i<sort.length;i++){
        if(nums[i]===nums[i-1])return true;
    }
    return false;
};