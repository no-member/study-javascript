const f1 = function(input) {
    let result;
    result = 1;

    return result
};

const f2 = function(input) {
    let result;
    result = 2;

    return result;
};

const f3 = function(input) {
    let result;
    result = 2;

    return result;
};

const get_encrypted = function(func) {
    let str = 'zzoon';

    return function() {
        return func.call(null, str);
    }
};

const encrypted_value = get_encrypted(f1)();
console.log(encrypted_value);

const encrypted_value2 = get_encrypted(f2)();
console.log(encrypted_value2);

const encrypted_value3 = get_encrypted(f3)();
console.log(encrypted_value3);
