const add = function(a, b) {
    console.dir(arguments);
    return a + b;
};

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));
