/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
      const result = [];
    const n = arr.length;

    for( let i = 0 ; i<n; i+= size){
        result.push(arr.slice(i,i+size));
    }
    
    return result;
};
