const obj = {
    outer: function() {
        console.log('outer this');
        console.log(this);

        const innerFunc = function() {
            console.log('inner this');
            console.log(this);
        }.bind(this);

        innerFunc();
        console.log(`innerFunc.name : ${innerFunc.name}`);
    }
};

obj.outer();

