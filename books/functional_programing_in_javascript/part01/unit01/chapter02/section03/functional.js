const run = function(f, g) {
    return function(x) {
        return f(g(x));
    };
};

const increment = counter => counter + 1;

let plus2 = run(increment, increment);

console.log(plus2(0));
