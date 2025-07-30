/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let len = 1;

    // step 01
    let mx = Math.max(...nums); // O(n)

    // step 02
    let tmp_len = 0;
    for(let i = 0; i < nums.length; i++) { // O(n)
        if(nums[i] === mx) {
            tmp_len++; // 3
        } else {
            len = Math.max(len, tmp_len);
            tmp_len = 0;
        }
    }

    len = Math.max(len, tmp_len);

    return len;
};