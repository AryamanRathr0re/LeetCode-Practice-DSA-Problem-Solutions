/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
     if (Array.isArray(obj)) {
        return obj
            .map(item => compactObject(item)) 
            .filter(Boolean);     

    } else if (obj !== null && typeof obj === 'object') {

        const result = {};
        for (const key in obj) {
            const val = compactObject(obj[key]); 
            if (Boolean(val)) result[key] = val; 
        }
        return result;
    }

    return obj;
};