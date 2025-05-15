/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let placeVal=0
    let placeValSix=-1

    let temp=num

    while(temp>0){
        let rem=temp%10

        if(rem===6){
            placeValSix=placeVal
        }
            temp=Math.floor(temp/10)
            placeVal++
        

       
    }

     if(placeValSix===-1){
            return num
        }
    return num+3*Math.pow(10,placeValSix)

};
