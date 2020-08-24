var a = 1;
var outser = function() {
    var b = 2;
    var inner = function () {
        console.log(b);
        debugger;
    };
    inner();
};
outser();

