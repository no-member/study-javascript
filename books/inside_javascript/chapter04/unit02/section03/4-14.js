const myFunction = function() {
    return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.__proto__);
console.dir(myFunction.prototype.constructor);
console.dir(myFunction.__proto__.constructor);

