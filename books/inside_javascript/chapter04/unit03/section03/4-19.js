const parent = function() {
    var a = 100;
    const child = function() {
        console.log(a);
    };

    return child;
};

const inner = parent();
inner();
