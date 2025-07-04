/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start=0
    let end=n
    while(start<=end){
        let middle=Math.floor(start+(end-start)/2)
        let res=guess(middle)
        if(res===0){
            return middle
        }
        else if(res<0){
                end=middle-1
        }
        else{
            start=middle+1
        }
    }
};