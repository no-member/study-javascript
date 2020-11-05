function wrap(object, method_name, wrapper) {
    const fn = object[method_name];
    return object[method_name] = function() {
        return wrapper.apply(this, [ fn ].concat(
            Array.prototype.slice.call(arguments)));
    };
};

Function.prototype.original = function(value) {
    this.value = value;
    console.log('value : ' + this.value);
};

const myWrap = wrap(Function.prototype, 'original', function(orig_func, value) {
    this.value = 20;
    orig_func(value);
    console.log('wrap value:' + this.value);
});

const obj = new myWrap('shin');
