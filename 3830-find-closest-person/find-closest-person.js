/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
const findClosest = (x, y, z) => {
    const a = Math.abs(x - z), b = Math.abs(y - z);
    return (a !== b) << (a > b);
};