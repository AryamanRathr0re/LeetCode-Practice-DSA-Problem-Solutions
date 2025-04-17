/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let currTAnk=0
    let pos=0
    let total=0

    for(let i=0;i<gas.length;i++){
        currTAnk+=gas[i]-cost[i]
        total+=gas[i]-cost[i]
        if(currTAnk<0){
            currTAnk=0
            pos=i+1
        }
    }
    return total<0?-1:pos
};