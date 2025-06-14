/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let minNum=num.toString()
    let maxNum=num.toString()
    let n=minNum.length

    let ch=""
    for(let i=0;i<n;i++){
        if(maxNum[i]!=="9"){
            ch=maxNum[i]
            break
        }

    }
    if(ch!==""){
        maxNum=maxNum.split("").map(c=>c===ch?"9":c).join("")
    }
    const minCh=minNum[0]
    minNum=minNum.split("").map(c=>c===minCh?"0":c).join("")
    return parseInt(maxNum)-parseInt(minNum)
};