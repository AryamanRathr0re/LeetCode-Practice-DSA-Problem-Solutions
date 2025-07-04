/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l=0
    let r=Math.floor(x/2)
    if(x<2) return x
    while(l<=r){
        let middle=Math.floor((l+r)/2)

        if(x===middle**2){
            return middle
        }
        else if(x<middle**2){
                r=middle-1
        }
        else{
            l=middle+1
        }
    }
    return r
};