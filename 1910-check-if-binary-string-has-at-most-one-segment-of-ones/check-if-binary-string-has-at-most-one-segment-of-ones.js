var checkOnesSegment = function(s) {
    let seenZero = false;

    for (let c of s) {
        if (c === '0') {
            seenZero = true;
        } else if (seenZero) {
            return false;
        }
    }

    return true;
};