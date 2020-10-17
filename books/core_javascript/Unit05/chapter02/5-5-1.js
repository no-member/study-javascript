let outer = (function () {
    let a = 1;
    const inner = function () {
        return ++a;
    }

    return inner;
})();

console.log(outer());
console.log(outer());
outer = null;
