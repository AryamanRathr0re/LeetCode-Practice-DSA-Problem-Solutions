const minNumberOfSeconds = (height, times) => {
    let lo = 1, hi = 1e16, res = hi;

    while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);
        let tot = 0;
        for (let i = 0; i < times.length && tot < height; i++)
            tot += Math.floor(Math.sqrt(mid / times[i] * 2 + 0.25) - 0.5);
        if (tot >= height) {
            res = mid;
            hi = mid - 1;
        } else
            lo = mid + 1;
    }
    
    return res;
};