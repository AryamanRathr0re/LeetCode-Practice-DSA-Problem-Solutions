/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
      if (arr.length < 2) {
        return true;  // Edge case: arrays with less than 2 elements
    }
    
    arr.sort((a, b) => a - b);  // Sort the array
    
    let diff = arr[1] - arr[0];  // Expected difference
    
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] != diff) {
            return false;
        }
    }
    
    return true;
};