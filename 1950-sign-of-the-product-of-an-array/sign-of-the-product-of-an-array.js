/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let res = 1;
    if (nums.includes(0)) return 0;
    else if (nums.filter(el => el < 0).length % 2 == 0) return 1;
    return -1;
};