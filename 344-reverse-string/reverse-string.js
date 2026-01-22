/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n=s.length-1
    for(let i=0;i<n;i++){
        let temp=s[i]
        s[i]=s[n]
        s[n]=temp
        n--
    }
};