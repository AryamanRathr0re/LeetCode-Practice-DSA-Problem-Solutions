/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length!==t.length){
        return false
    }

    let a1=new Array(128).fill(0)
    let a2=new Array(128).fill(0)

    for(let i=0;i<s.length;i++){
        a1[s.charCodeAt(i)]++
        a2[t.charCodeAt(i)]++
    }

    for(let i=0;i<a1.length;i++){
        if(a1[i]!==a2[i]){
            return false
        }

    }
    return true
};
