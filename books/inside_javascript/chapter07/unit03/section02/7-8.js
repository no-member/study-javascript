function calculate(a, b, c) {
    return a * b + c;
};

function curry2(func) {
    const args = Array.prototype.slice.call(arguments, 1);

    return function() {
        let arg_idx = 0;
        for(let i = 0; i < args.length && arguments.length; i++) {
            if(args[i] === undefined) {
                args[i] = arguments[arg_idx++];
            }

            return func.apply(null, args);
        }
    }
}

const new_func = curry2(calculate, 1, undefined, 4);
console.log(new_func(3));
