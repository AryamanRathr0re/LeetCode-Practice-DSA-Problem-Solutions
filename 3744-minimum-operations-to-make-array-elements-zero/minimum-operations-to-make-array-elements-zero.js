/**
 * @param {number[][]} queries
 * @return {number}
 */
const $ = x => -~x * (
        x = 33 - Math.clz32(x) >> 1
    ) - (0x15555555 >> 30 - 2 * x),
    minOperations = q => _.sumBy(q,
        ([l, r]) => Math.ceil(($(r) - $(l - 1)) / 2)
    )