/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len=height.length
    let i=0
    let j=len-1
    let ans =0
    let max=0

    while(i<j){
        let b=j-i
        let h=Math.min(height[i],height[j])
        let area=b*h
        ans=Math.max(area,ans)

        if(height[i]>height[j]) j--
        else i++
    }
    return ans

};