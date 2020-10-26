function reduce(func, arr, memo) {
    let len = arr.length;
    let accum = memo;

    for(let i = 0; i < len; i++) {
        accum = func(accum, arr[i]);
    }

    return accum;
};

