const arr = [2, 3, 1, 200, 233, 441, 4, 2];

reverseArr = [].concat(arr).sort(function(a, b) {
    return b - a;
});

console.log(reverseArr);
console.log(arr);
console.log();

arr.sort(function(a, b) {
    return b - a;
});

console.log(arr);

