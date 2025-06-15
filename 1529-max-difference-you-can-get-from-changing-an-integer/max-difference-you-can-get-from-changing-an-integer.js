/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    const numStr=num.toString()

    let maxStr=numStr

    for(let ch of numStr){
        if(ch!=="9"){
            maxStr=numStr.replaceAll(ch,"9")
            break
        }
    }

    let minStr=numStr

    for(let i=0;i<numStr.length;i++){
        let ch=numStr[i]
        if(i===0&&ch!=="1"){
            minStr=numStr.replaceAll(ch,"1")
            break
        }
        else if(i>0&&ch!=="0"&&ch!==numStr[0]){
            minStr=numStr.replaceAll(ch,"0")
            break
        }
    }
    return parseInt(maxStr)-parseInt(minStr)

};