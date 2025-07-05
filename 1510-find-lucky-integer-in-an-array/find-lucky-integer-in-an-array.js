/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
      let count=0;
    let value=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if( arr[i]===arr[j]){
                count++;
            }
        }
       
        if(count===arr[i] && value<arr[i]){
            value=arr[i];
        }
          count=0;
    }

    return value>0 ? value : -1
};