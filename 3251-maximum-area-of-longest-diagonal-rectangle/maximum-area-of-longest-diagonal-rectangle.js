/**
 * @param {number[][]} dimensions
 * @return {number}
 */
/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let mx = 0;
    let mxDia = 0;
    for (const [w, h] of dimensions){
        let dia = w * w + h * h;
        if (dia > mxDia){
            mxDia = dia;
            mx = 0;
        }
        if (dia === mxDia){
            mx = Math.max(mx, w * h);
        }
    }
    return mx;
};