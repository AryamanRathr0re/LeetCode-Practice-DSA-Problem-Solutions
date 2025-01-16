/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let max=0
                let count=1
                    let majorityElement = nums[0];

    let sorted=nums.sort((a,b)=>a-b)
    for(let i=0;i<sorted.length;i++){

        if(sorted[i]===sorted[i+1]){
            count++
        }
        else{
            if(count>max){
            max=count
            majorityElement=sorted[i]
            }
            count=1
            
        }
    }
    return majorityElement
};