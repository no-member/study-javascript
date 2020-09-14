const arr = [1, 200, 3, 10000, 55, 2, 203030];

reverseArr = [].concat(arr).sort(function(a, b) {
    return a - b;
});

console.log(arr);
console.log(reverseArr);
console.log();

arr.sort(function(a, b) {
    return a - b;
});

console.log(arr);
