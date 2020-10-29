Array.prototype.map = function (callback) {
    const obj = this;
    let value;
    let mapped_value;

    let A = new Array(obj.length);

    for (let i = 0; i < obj.length; i++) {
        value = obj[i];
        mapped_value = callback.call(null, value);
        A[i] = mapped_value;
    }

    return A;
};

const arr = [1, 2, 3];
const new_arr = arr.map(function (value){
    return value * value;
});

