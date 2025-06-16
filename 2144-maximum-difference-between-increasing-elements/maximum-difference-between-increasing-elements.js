/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let minElement=nums[0]
    let maxDiff=-1
    for(let j=1;j<nums.length;j++){
        if(nums[j]>minElement){
            maxDiff=Math.max(maxDiff,nums[j]-minElement)
        }
        else{
            minElement=nums[j]
        }
    }
    return maxDiff
};