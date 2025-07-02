/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack=[]

    for(let i=0;i<tokens.length;i++){
        if(tokens[i]==="+"|| tokens[i]==="-"|| tokens[i]==="*"|| tokens[i]==="/"){
             let a=stack.pop()
            let b=stack.pop()
            let sum=eval(`${b} ${tokens[i]} ${a}`)
            stack.push(Math.trunc(sum))
        }
        else{
                       stack.push(tokens[i])

        }
    }
    return Number(stack.pop())
};