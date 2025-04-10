/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function rightMost(nums,target,n){
    let start=0
    let end=n-1
    let rightMost=-1
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2)
        if(nums[mid]===target){
            rightMost=mid
            start=mid+1
        }
        else if(nums[mid]<target){
            start=mid+1
        }
        else{
            end=mid-1
        }
    }
    return rightMost
}


function leftMost(nums,target,n){
    let start=0
    let end=n-1
    let leftMost=-1
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2)
        if(nums[mid]===target){
            leftMost=mid
            end=mid-1
        }
        else if(nums[mid]<target){
            start=mid+1
        }
        else{
            end=mid-1
        }
    }
    return leftMost
}
var searchRange = function(nums, target) {
    let n=nums.length
    let left_most=leftMost(nums,target,n)
    let right_most=rightMost(nums,target,n)
    return [left_most,right_most]
};