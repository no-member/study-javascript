function calculate(a, b, c) {
    return a * b + c;
};

function curry(func) {
    const args = Array.prototype.slice.call(arguments, 1);

    return function() {
        return func.apply(null,
            args.concat(Array.prototype.slice.call(arguments)));
    }
}

const new_func1 = curry(calculate, 1);
console.log(new_func1(2, 3));
console.log('');

const new_func2 = curry(calculate, 1, 3);
console.log(new_func2(3));
