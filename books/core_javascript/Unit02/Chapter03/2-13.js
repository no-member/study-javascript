var a = 1;
var outer = function () {
    var inner = function () {
        console.log("inner");
        console.log(a);
        var a = 3;
    }
    inner();

    console.log("outer");
    console.log(a);
};

outer();
console.log("context");
console.log(a);
