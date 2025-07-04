/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function(k, operations) {
      k--;
    const str = k.toString(2);
    const n = str.length;

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] == '1') {
            if (operations[n-i-1] === 1) {
                count++;
            }
        }
    }
    
    return String.fromCharCode(97 + (count % 26));
};