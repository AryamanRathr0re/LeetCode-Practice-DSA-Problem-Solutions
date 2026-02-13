/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res=0
    for(let i=0;i<columnTitle.length;i++){
        let char=columnTitle[i]
        let value=char.charCodeAt(0)-64
        res=res*26+value
    }
    return res
};