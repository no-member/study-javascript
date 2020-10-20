const arr = [1, 2];
console.log(Array.prototype.toString.call(arr));
console.log('');

console.log(Object.prototype.toString.call(arr));
console.log('');

console.log(arr.toString())
console.log('');

arr.toString = function() {
    return this.join('_');
};
console.log(arr.toString());
