/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
const divideString = (s, k, fill) => {
    let sb = s;

    while (sb.length % k !== 0) {
        sb += fill;
    }

    const res = new Array(sb.length / k);
    for (let i = 0; i < sb.length / k; i++) {
        res[i] = sb.substring(i * k, (i + 1) * k);
    }

    return res;
};