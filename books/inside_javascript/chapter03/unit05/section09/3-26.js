const arr1 = ['bar'];
const obj1 = {
    name: 'foo',
    length: 1
};

arr1.push('baz');
console.log(arr1);

Array.prototype.push.apply(obj1, ['baz']);
Array.prototype.push.call(obj1, 'holo');
console.log(obj1);
