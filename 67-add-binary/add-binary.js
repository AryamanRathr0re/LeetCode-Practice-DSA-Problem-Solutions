const addBinary = (a, b) => {
    let x = BigInt(`0b${a}`);
    let y = BigInt(`0b${b}`);

    while (y !== 0n) {
        const car = (x & y) << 1n;
        x = x ^ y;
        y = car;
    }

    return x.toString(2);
};
