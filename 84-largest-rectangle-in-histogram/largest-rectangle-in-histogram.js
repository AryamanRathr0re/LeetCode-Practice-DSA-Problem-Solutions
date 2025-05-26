/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
     let stack=[]
    let maxArea=0
    let N=heights.length
    for(let i=0;i<=N;i++){
      while(stack.length>0&&(i===N||heights[stack[stack.length-1]]>heights[i])){
        let height=heights[stack.pop()]
        let width=stack.length===0?i:i-stack[stack.length-1]-1
        maxArea=Math.max(maxArea,height*width)
      }
      stack.push(i)
    }
    return maxArea
};