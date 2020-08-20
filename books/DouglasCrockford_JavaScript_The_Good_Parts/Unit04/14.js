var add = function(a, b) {
    return a + b;
};

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
};

Function.method('curry', function() {
    const slice = Array.prototype.slice;
    const args = slice.apply(arguments);
    const that = this;

    return function() {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});

var add1 = add.curry(1);
console.log(add1(6));

// Function.method('curry', function() {
//     var agrs = arguments;
//     var that = this;
//     return function() {
//         return that.apply(null, args.concat(arguments));
//     };
// });


