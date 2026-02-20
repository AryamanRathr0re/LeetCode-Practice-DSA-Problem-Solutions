/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s=s.trim()

    let sign=1
    let res=0
    let i=0
    if(s.length===0) return 0

    if(s[i]==="-"){
        sign=-1
        i++
    }
    else if(s[i]==="+"){
        i++
    }

    while(i<s.length&&s[i]>="0"&&s[i]<="9"){
        res=res*10+(s[i]-"0")

        if(sign*res>2**31-1) return 2**31-1
        if(sign*res<-(2**31)) return -(2**31)

        i++
    }
    return sign*res
};