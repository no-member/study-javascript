const countdown = function (seconds) {
    return new Promise(function (resolve, reject) {
        for (let i = seconds; i >= 0; i--) {
            setTimeout(function () {
                if (i > 0) {
                    console.log(i + '...');
                } else {
                    resolve(console.log('Go!'));
                }
            }, (seconds - i) * 1000);
        }
    });
}

const p = countdown(5);
p.then(function () {
    console.log("countdown completed successfully");
});
p.catch(function (err) {
    console.log(`countdown experienced an error: ${err.message}`);
});
