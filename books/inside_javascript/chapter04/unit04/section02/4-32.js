const myFunction = function() {
    console.dir(arguments);

    const args = Array.prototype.slice.apply(arguments);
    console.dir(args);
};

myFunction(1, 2, 3);
