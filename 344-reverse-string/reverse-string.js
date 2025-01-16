/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
   
    function rev(l,r){
        while(l<r){
            [s[l],s[r]]=[s[r],s[l]]
            l++
            r--
        }
    }
    let ans =rev(0,s.length-1)
    return ans
};