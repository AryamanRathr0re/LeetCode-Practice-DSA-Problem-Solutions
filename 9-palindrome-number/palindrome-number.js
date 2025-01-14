/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let ans=0
let temp=x


    while(x>0){
       let rem=x%10
        ans=(ans*10)+rem
        x=Math.floor(x/10)

    }
 
    if(temp===ans){
        return true
    }
    else
    {
        return false
    }
    
};