/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function(nums) {
    const n = nums.length;
    if (n <= 1) 
        return 0;

    const port = new Map();

    for (let i = 0; i < n; i++) {
        let tmp = nums[i];
        for (let d = 2; d * d <= tmp; d++) {
            if (tmp % d === 0) {
                if (!port.has(d)) 
                    port.set(d, []);
                port.get(d).push(i);
                while (tmp % d === 0) 
                    tmp /= d;
            }
        }
        if (tmp > 1) {
            if (!port.has(tmp)) 
                port.set(tmp, []);
            port.get(tmp).push(i);
        }
    }

    const visited = new Uint8Array(n); 
    const q = new Int32Array(n); 
    let head = 0;
    let tail = 0;

    q[tail++] = 0;
    visited[0] = 1;
    let steps = 0;

    while (head < tail) {
        let sz = tail - head;
        while (sz--) {
            const i = q[head++];
            if (i === n - 1) 
                return steps;
            const num = nums[i];

            if (port.has(num)) {
                const neighbors = port.get(num);
                for (let k = 0; k < neighbors.length; k++) {
                    const nei = neighbors[k];
                    if (!visited[nei]) {
                        visited[nei] = 1;
                        q[tail++] = nei;
                    }
                }
                port.delete(num); 
            }

            if (i + 1 < n && !visited[i + 1]) {
                visited[i + 1] = 1;
                q[tail++] = i + 1;
            }


            if (i - 1 >= 0 && !visited[i - 1]) {
                visited[i - 1] = 1;
                q[tail++] = i - 1;
            }
        }
        steps++;
    }

    return steps;
};