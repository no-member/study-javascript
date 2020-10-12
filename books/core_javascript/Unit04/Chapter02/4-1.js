const count = 0;

const timer = setInterval(function() {
    console.log(count);
    if (count++ > 4) {
        clearInterval(timer);
    }
}, 300);

