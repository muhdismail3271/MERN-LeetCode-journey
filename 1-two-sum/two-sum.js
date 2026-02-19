/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let num = []
    for(let v=0; v<nums.length; v++){
      for(let i=v+1; i<nums.length; i++){
         if(nums[v] + nums[i] === target){num.push(v,i)}
      }
    }
    return num;
}