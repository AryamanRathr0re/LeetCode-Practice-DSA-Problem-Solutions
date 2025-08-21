/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
  const m = mat.length, n = mat[0].length;
  const h = Array(n).fill(0);
  let res = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++)
      h[j] = mat[i][j] === 0 ? 0 : h[j] + 1;

    for (let j = 0; j < n; j++) {
      let mn = Infinity;
      for (let k = j; k >= 0 && h[k] > 0; k--) {
        mn = Math.min(mn, h[k]);
        res += mn;
      }
    }
  }
  return res;
};