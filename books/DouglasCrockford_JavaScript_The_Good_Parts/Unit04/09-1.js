const foo = function () {
    let a = 3;
    const b = 5;

    console.log(`a1: ${a}`);
    console.log(`b1: ${b}`);
    console.log();

    const bar = function() {
        const b = 7;
        const c = 11;

        a += b + c;

        console.log(`a2: ${a}`);
        console.log(`b2: ${b}`);
        console.log(`c2: ${c}`);
        console.log();
    };

    bar();

    console.log(`a3: ${a}`);
    console.log(`b3: ${b}`);
    // console.log(`c3: ${c}`);
    console.log();
};

foo();
