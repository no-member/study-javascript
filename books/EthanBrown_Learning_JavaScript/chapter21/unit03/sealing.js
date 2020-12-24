class Logger {
  constructor(name) {
    this.name = name;
    this.log = [];
  }
  add(entry) {
    this.log.push({
      log: entry,
      timestamp: Date.now()
    });
  }
}

const log = new Logger("Caption's Log");
Object.seal(log);

console.log(Object.isSealed(log));

log.name = "Caption's Boring Log";
log.add("Another boring day at sea....");
console.log(log);
console.log();

log.newProp = 'test'; // error when env is strict mode
log.name = 'test' // Ok
console.log(log);
console.log();

delete log.name; // error when env is strict mode
console.log(log);
console.log();

Object.defineProperty(log, 'log', { enumerable: false }); // error

