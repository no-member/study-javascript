var obj1 = {
    outer: function () {
        console.log(this); 
        var innerFunc = function() {
            console.log(this); 
        }
        innerFunc(); // window

        var obj2 = {
            innerMethod: innerFunc
        };

        obj2.innerMethod(); // obj2
    }
};

obj1.outer(); // obj1
