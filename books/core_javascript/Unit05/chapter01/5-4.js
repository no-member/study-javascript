(function () {
    let a = 0;
    let intervalId = null;
    const inner = function () {
        if (++a >= 10) {
            clearInterval(intervalId);
        }

        console.log(a);
    };

    intervalId = setInterval(inner, 1000);
})();