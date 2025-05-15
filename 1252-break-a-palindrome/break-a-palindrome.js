/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    let n=palindrome.length

    if(n===1) return ""
    let arr=palindrome.split('')
    for(let i=0;i<Math.floor(n/2);i++){
        if(arr[i]!=="a"){
            arr[i]="a"
            return arr.join("")
        }
    }
    arr[n-1]='b'
    return arr.join('')
};