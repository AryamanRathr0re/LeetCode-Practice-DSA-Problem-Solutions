/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
    let n=plantTime.length
    let arr=[]

    for(let i=0;i<n;i++){
        arr.push([plantTime[i],growTime[i]])

    }
    arr.sort((a,b)=>b[1]-a[1])

    let maxBloomDays=0
    let prevPlant=0
    for(let i=0;i<n;i++){
        let plantTime=arr[i][0]
        let growTime=arr[i][1]
        prevPlant+=plantTime
        let plantBloom=prevPlant+growTime
        maxBloomDays=Math.max(maxBloomDays,plantBloom)
    }
    return maxBloomDays
};