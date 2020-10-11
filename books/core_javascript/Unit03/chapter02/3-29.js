const obj = {
    outer: function() {
        console.log(this);
        const innerFunc = () => {
            console.log(this);
        };
        
        innerFunc();
    }
};

obj.outer();

