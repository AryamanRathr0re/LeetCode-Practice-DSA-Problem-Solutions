var numSpecial = function(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let rowcnt = new Array(m).fill(0);
    let colcnt = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                rowcnt[i]++;
                colcnt[j]++;
            }
        }
    }

    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1 && rowcnt[i] === 1 && colcnt[j] === 1) {
                ans++;
            }
        }
    }

    return ans;
};