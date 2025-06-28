/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
      let withIndex = nums.map((val, idx) => [val, idx]);

    withIndex.sort((a, b) => b[0] - a[0]);

    let topK = withIndex.slice(0, k);

    topK.sort((a, b) => a[1] - b[1]);

    return topK.map(item => item[0]);
};