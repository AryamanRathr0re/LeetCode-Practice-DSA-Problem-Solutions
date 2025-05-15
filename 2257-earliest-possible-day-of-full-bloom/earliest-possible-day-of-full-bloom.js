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

    let prevPlantDays=0
    let maxBloomDays=0

    for(let i=0;i<n;i++){
        let currPlantTime=arr[i][0]
        let currGrowTime=arr[i][1]

         prevPlantDays+=currPlantTime

        let currPlantBloomTime=prevPlantDays+currGrowTime

        maxBloomDays=Math.max(maxBloomDays,currPlantBloomTime)
    }
    return maxBloomDays
};