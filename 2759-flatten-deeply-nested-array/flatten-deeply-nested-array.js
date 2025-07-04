/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
      if (!n) return arr;

    const helpFlat = (array, depth) => {
        if (!depth) return array;

        const subArr = [];
        for (const e of array) {
            if (!Array.isArray(e)) {
                subArr.push(e);
            } else {
                subArr.push(...helpFlat(e, depth - 1)); 
            }
        }
        return subArr;
    };

    return helpFlat(arr, n);
};