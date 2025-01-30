/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res=[]
    let n=matrix.length
    let m=matrix[0].length
    let top=0
    let left=0
    let right=m-1
    let bottom=n-1
    let count=0
    let total=n*m

    while (count < total) {
    for (let i = left; i <= right && count < total; i++) {
      res.push(matrix[top][i]);
      count++;
    }
    top++;

    for (let i = top; i <= bottom && count < total; i++) {
      res.push(matrix[i][right]);
      count++;
    }
    right--;

    for (let i = right; i >= left && count < total; i--) {
      res.push(matrix[bottom][i]);
      count++;
    }
    bottom--;

    for (let i = bottom; i >= top && count < total; i--) {
      res.push(matrix[i][left]);
      count++;
    }
    left++;
  }

return res


};