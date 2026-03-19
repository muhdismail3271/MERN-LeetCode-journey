/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let arr = [];
    if(nums.includes(target)){
        arr.push(nums.indexOf(target));
        arr.push(nums.lastIndexOf(target));
    }
    else{
        arr.push(-1);
        arr.push(-1);
    }
    return arr;
};