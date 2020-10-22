const parent = function() {
    const a = 100;
    const b = 200;

    const child = function() {
        const b = 300;

        console.log(a);
        console.log(b);
    }

    console.log(a);
    console.log(b);

    child();
};

parent();
    
