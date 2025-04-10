/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m=matrix.length
    let n=matrix[0].length
    let start=0
    let end=m*n-1
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2)
        let row=Math.floor(mid/n)
        let col=mid%n
        if(matrix[row][col]===target){
            return true
        }
         if(matrix[row][col]<target){
            start=mid+1
        }
        else{
            end=mid-1
        }
    }
    return false
};