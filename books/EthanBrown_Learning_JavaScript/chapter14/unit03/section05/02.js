function addTimeout(fn, timeout) {
    if (timeout === undefined) {
        timeout = 1000;
    }
    return function (...args) {
        return new Promise(function (resolve, reject) {
            const tid = setTimeout(reject, timeout,
                new Error("promise timed out"));

            fn(...args)
                .then(function (...args) {
                    clearTimeout(tid);
                    resolve(...args);
                })
                .catch(function (...args) {
                    clearTimeout(tid);
                    reject(...args);
                });
        });
    }
}

const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function (resolve, reject) {
            for (let i = countdown.seconds; i >= 0; i--) {
                timeoutIds.push(
                    setTimeout(function () {
                        if (countdown.superstitious && i === 13) {
                            timeoutIds.forEach(clearTimeout);
                            return reject(new Error('Oh my god'));
                        }
                        countdown.emit('tick', i);

                        if (i === 0) {
                            resolve();
                        }
                    }, (countdown.seconds - i) * 1000)
                );
            }
        });
    }
}

function launch() {
    return new Promise(function (resolve, reject) {
        console.log("Lift off!");
        setTimeout(function () {
            resolve("In orbit!");
        }, 10 * 100);
    })
}

const c = new Countdown(15)
    .on('tick', i => console.log(i + '...'))

c.go()
    .then(addTimeout(launch, 11 * 1000))
    .then(function (msg) {
        console.log(msg);
    })
    .catch(function (err) {
        console.error("Houston, we have a problem" + err.message);
    });

