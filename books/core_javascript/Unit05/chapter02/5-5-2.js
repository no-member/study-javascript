(function () {
    let a = 0;
    let intervalId = null;
    let inner = function () {
        if (++a >= 4) {
            clearInterval(intervalId);
            inner = null;
        }
        console.log(a);
    };

    intervalId = setInterval(inner, 1000);
})();