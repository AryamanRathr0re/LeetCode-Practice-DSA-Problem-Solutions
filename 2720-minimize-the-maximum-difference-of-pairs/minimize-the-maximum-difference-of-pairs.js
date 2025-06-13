/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
      nums.sort((a, b) => a - b);

    const canFormPairs = (nums, d, p, c = 0) => {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i + 1] - nums[i] <= d) {
                c++;
                i++;
            }
            if (c >= p) return true;
        }
        return false;
    };

    const binarySearch = (nums, p) => {
        let L = 0, H = nums.at(-1) - nums[0];
        while (L < H) {
            const M = L + ((H - L) >> 1);
            if (canFormPairs(nums, M, p)) {
                H = M;
            } else {
                L = M + 1;
            }
        }
        return L;
    };

    return binarySearch(nums, p);
};