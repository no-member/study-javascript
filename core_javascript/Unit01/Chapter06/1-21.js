var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

console.log('forEach');
console.log('1번');
arr1.forEach(function (v, i) { console.log(v, i); });
console.log('2번');
arr2.forEach(function (v, i) { console.log(v, i); });
console.log('');

console.log('map');
console.log('1번');
arr1.map(function (v, i) { return v + i; });
console.log('2번');
arr2.map(function (v, i) { return v + i; });
console.log('');

console.log('filter');
console.log('1번');
arr1.filter(function (v) { return !v; });
console.log('2번');
arr2.filter(function (v) { return !v; });
console.log('');

console.log('reduce');
console.log('1번');
arr1.reduce(function (p, c, i) { return p + c + i;}, '');
console.log('2번');
arr2.reduce(function (p, c, i) { return p + c + i;}, '');
console.log('');

