/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    // map - position: amount
    let map = {};
    for (let i = 0; i < fruits.length; i++) {
        map[fruits[i][0]] = fruits[i][1];
    }
    
    // start at leftmost window and slide it to the right oh yeah~
    let maxAmountL = 0;
    for (let i = startPos - k; i <= startPos; i++) {
        maxAmountL += map[i + ''] || 0;
    }
    
    let left = startPos - k;
    let right = startPos;
    let curAmount = maxAmountL;
    while (Math.abs(left - startPos) >= Math.abs(right - startPos) && left <= startPos) {
        curAmount -= map[left++ + ''] || 0;
        curAmount -= map[left++ + ''] || 0;
        curAmount += map[++right + ''] || 0;
        maxAmountL = Math.max(maxAmountL, curAmount);
    }
    
    // start at rightmost window and slide it to the left uh huh~
    let maxAmountR = 0;
    for (let i = startPos + k; i >= startPos; i--) {
        maxAmountR += map[i + ''] || 0;
    }
    
    left = startPos;
    right = startPos + k;
    curAmount = maxAmountR;
    while (Math.abs(left - startPos) <= Math.abs(right - startPos) && right >= startPos) {
        curAmount -= map[right-- + ''] || 0;
        curAmount -= map[right-- + ''] || 0;
        curAmount += map[--left + ''] || 0;
        maxAmountR = Math.max(maxAmountR, curAmount);
    }
    
    return Math.max(maxAmountL, maxAmountR);
};