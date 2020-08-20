function a () {
    console.log(b);
    var b = 'bbb';
    console.log(b);
    var b = function() {}
    console.log(b);
}

a()
