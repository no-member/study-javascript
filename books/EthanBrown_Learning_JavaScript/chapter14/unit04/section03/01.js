const fs = require('fs');

function* theFutrueIsNow() {
    let data;

    try {
        data = yield Promise.all([
            nfcall(fs.readFile, 'a.txt'),
            nfcall(fs.readFile, 'b.txt'),
            nfcall(fs.readFile, 'c.txt'),
        ]);
    } catch (err) {
        console.error("Unable to read one or more input files: " + err.message);
        throw err;
    }
    yield ptimeout(60 * 1000);
    try {
        yield nfcall(fs.writeFile, 'd.txt', data[0] + data[1] + data[2]);
    } catch (err) {
        console.error("Unable to write output file: " + err.message);
        throw err;
    }
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