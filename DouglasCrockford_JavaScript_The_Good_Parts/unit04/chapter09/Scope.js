var foo = function () {
    var a = 3, b = 5;

    var bar = function () {
        var b = 7, c = 11;

        console.log('before add a inside bar : ', a);
        console.log('before add b inside bar : ', b);
        console.log('before add c inside bar : ', c);

        a += b + c;

        console.log('after add a inside bar : ', a);
        console.log('after add b inside bar : ', b);
        console.log('after add c inside bar : ', c);
    };

    console.log('before bar() a outside bar : ', a);
    console.log('before bar() b outside bar : ', b);
    console.log('before bar() c outside bar : ', c);

    bar();

    console.log('after bar() a outside bar : ', a);
    console.log('after bar() b outside bar : ', b);
    console.log('after bar() c outside bar : ', c);
};

foo();