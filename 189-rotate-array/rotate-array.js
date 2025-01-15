/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    function rev(l,r){
        while(l<r){
            [nums[l],nums[r]]=[nums[r],nums[l]]
            l++
            r--
        }
    }
    k=k%nums.length

    rev(0,nums.length-1)
    rev(0,k-1)
    rev(k,nums.length-1)
    return nums
};