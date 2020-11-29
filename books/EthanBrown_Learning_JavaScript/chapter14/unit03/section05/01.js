function launch() {
    return new Promise(function (resolve, reject) {
        if (Math.random() < 0.5) {
            return
        }
        console.log("Lift off!");

        setTimeout(function () {
            resolve("In orbit!");
        }, 2 * 1000);
    });
}

