/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let r = matrix.length; // Number of rows
    let c = matrix[0].length; // Number of columns

    // Use two arrays to track which rows and columns need to be zeroed
    let rowsToZero = new Array(r).fill(false);
    let colsToZero = new Array(c).fill(false);

    // First pass: Identify rows and columns to be zeroed
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (matrix[i][j] === 0) {
                rowsToZero[i] = true;
                colsToZero[j] = true;
            }
        }
    }

    // Second pass: Set rows to zero
    for (let i = 0; i < r; i++) {
        if (rowsToZero[i]) {
            for (let j = 0; j < c; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Third pass: Set columns to zero
    for (let j = 0; j < c; j++) {
        if (colsToZero[j]) {
            for (let i = 0; i < r; i++) {
                matrix[i][j] = 0;
            }
        }
    }
};