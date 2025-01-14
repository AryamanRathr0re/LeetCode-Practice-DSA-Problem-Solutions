/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
        let n=nums.length

    let sort=nums.sort((a,b)=>a-b)
    for(let i=n-3;i>=0;i--){
        if(nums[i]+nums[i+1]>nums[i+2]){
            return nums[i]+nums[i+1]+nums[i+2]
        }
         
    }
    return 0


    
    
};