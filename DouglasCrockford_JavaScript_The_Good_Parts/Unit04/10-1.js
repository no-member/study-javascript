const myObject = function() {
    let value = 0;

    return {
        increment: function(num) {
            value += typeof num === 'number' ? num : 1;
        },
        getValue: function() {
            return value;
        }
    };
}();

console.log(myObject.value);

console.log(myObject.getValue());

console.log(myObject.increment());

console.log('');

console.log(myObject.value);

console.log(myObject.getValue());

