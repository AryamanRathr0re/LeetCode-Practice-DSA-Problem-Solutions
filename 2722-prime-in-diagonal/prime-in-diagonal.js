/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    let max=0

    for(let i=0;i<nums.length;i++){
        if(max<nums[i][i]&&isPrime(nums[i][i]))
        {
            max=nums[i][i]
        }
    } 
    let j=nums.length-1

    for(let i=0;i<nums.length;i++){
        if(max<nums[i][j]&& isPrime(nums[i][j])){
            max=nums[i][j]
        }
        j--
    }  
        return max
};
function isPrime(num){
    if (num<2){
        return false
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
return false
        }
    }
    return true
    
}
