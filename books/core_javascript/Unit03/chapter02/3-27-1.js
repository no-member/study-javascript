const obj = {
    outer: function() {
        console.log(this);

        const innerFunc = function() {
            console.log(this);
        };

        innerFunc.call(this);
    }
};
obj.outer();

