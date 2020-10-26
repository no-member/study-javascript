const arr = [1, 2, 3, 4];

const sum = function(x, y) {
    return x + y;
};

const multiply = function(x, y) {
    return x * y;
};

function reduce(func, arr, memo) {
    let len = arr.length;
    let accum = memo;

    for(let i = 0; i < len; i++) {
        accum = func(accum, arr[i]);
    }

    return accum;
};


console.log(reduce(sum, arr, 0));
console.log(reduce(multiply, arr, 1));

