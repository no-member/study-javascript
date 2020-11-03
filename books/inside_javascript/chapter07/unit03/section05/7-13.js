Array.prototype.reduce = function(callback, memo) {
    console.log(memo);

    const obj = this;
    let value = 0;
    let accumulated_value = 0; 

    for(let i = 0; i < obj.length; i++) {
        value = obj[i];
        accumulated_value = callback.call(null, accumulated_value, value);
    }

    return accumulated_value;
};

const arr = [1, 2, 3];
const accumulated_val = arr.reduce(function(a, b) {
    return a + b*b;
});

console.log(accumulated_val);
