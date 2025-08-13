/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = n => {
    const ternary = [...n.toString(3)];
    let count1 = 0;
    for (const c of ternary) {
        if (c === '1') count1++;
        if (c === '2') return false;
    }

    return n > 0 && count1 === 1;
}