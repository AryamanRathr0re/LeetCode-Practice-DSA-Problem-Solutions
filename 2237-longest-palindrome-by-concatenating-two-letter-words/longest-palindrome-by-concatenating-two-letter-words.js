/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
     const freqMap = {};
    let result = 0;
    let centerUsed = false;
    
    // Count frequencies
    for (const word of words) {
        freqMap[word] = (freqMap[word] || 0) + 1;
    }
    
    // Process words
    for (const word in freqMap) {
        const rev = word[1] + word[0];
        
        if (word === rev) { // Same letters (e.g., "aa")
            const count = freqMap[word];
            const pairs = Math.floor(count / 2);
            result += pairs * 4;
            
            if (count % 2 === 1 && !centerUsed) {
                result += 2;
                centerUsed = true;
            }
        } 
        else if (word < rev) { // Process only once per pair to avoid double-counting
            const count = Math.min(freqMap[word] || 0, freqMap[rev] || 0);
            result += count * 4;
        }
    }
    
    return result;
};