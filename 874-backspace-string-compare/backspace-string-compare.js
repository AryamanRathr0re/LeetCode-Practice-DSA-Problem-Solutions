/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    let s1=[]
    let t1=[]
    for(let i=0;i<s.length;i++){
        if(s[i]!=="#")
        s1.push(s[i])
        else s1.pop()
    }
     for(let i=0;i<t.length;i++){
        if(t[i]!=="#")
        t1.push(t[i])
        else t1.pop()
    }

    s1=s1.join('')
    t1=t1.join('')

    if(s1===t1) return true
    else return false


};