/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function rightMost(nums,target,n){
    let start=0
    let end=n-1
   let  right=-1
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2)
        if(nums[mid]===target){
            right=mid
            start=mid+1
        }
        else if(nums[mid]<target){
            start=mid+1
        }
        else{
            end=mid-1
        }
    }
     return right

}

function leftMost(nums,target,n){
    let start=0
    let end=n-1
 let   left=-1
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2)
        if(nums[mid]===target){
            left=mid
            end=mid-1
        }
        else if(nums[mid]<target){
            start=mid+1
        }
        else{
            end=mid-1
        }
    }
     return left

}

var searchRange = function(nums, target) {
    let n=nums.length
    let left_most=leftMost(nums,target,n)
    let right_most=rightMost(nums,target,n)
    return [left_most,right_most]
};