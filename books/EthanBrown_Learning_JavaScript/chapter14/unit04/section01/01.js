const fs = require('fs');

function* theFutrueIsNow() {
    const data = yield Promise.all([
        nfcall(fs.readFile, 'a.txt'),
        nfcall(fs.readFile, 'b.txt'),
        nfcall(fs.readFile, 'c.txt'),
    ]);
    yield ptimeout(60 * 1000);
    yield nfcall(fs.writeFile, 'd.txt', data[0] + data[1] + data[2]);
}

function nfcall(f, ...args) {
    return new Promise(function (resolve, reject) {
        f.call(null, ...args, function (err, ...args) {
            if (err) {
                return reject(err);
            }

            resolve(args.length < 2 ? args[0] : args);
        });
    });
}

function ptimeout(delay) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay);
    })
}

theFutrueIsNow();