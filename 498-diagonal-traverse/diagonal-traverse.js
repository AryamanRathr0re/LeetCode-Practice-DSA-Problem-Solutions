/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    if (!mat || mat.length === 0 || mat[0].length === 0) return [];

    const r = mat.length;
    const c = mat[0].length;

    // Step 1: Group elements by i + j
    const di = {};
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            const sum = i + j;
            if (!(sum in di)) {
                di[sum] = [];
            }
            di[sum].push(mat[i][j]);
        }
    }

    // Step 2: Build result in required zig-zag order
    const res = [];
    for (let s = 0; s < r + c - 1; s++) {
        let vals = di[s];
        if (s % 2 === 0) {
            vals.reverse();
        }
        res.push(...vals);
    }

    return res;
};