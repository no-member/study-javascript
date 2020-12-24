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

const log = new Logger("First Mate's Log");
Object.preventExtensions(log);

console.log(Object.isExtensible(log));
console.log();

log.name = "First Mate's Boring Log";
log.add("Another boring day at sea....");
console.log();

log.newProp = 'test'; // error when env is strict mode
console.log(log);
console.log();


log.name = 'test';
console.log(log);
console.log();

delete log.name;
console.log(log);
console.log();

Object.defineProperty(log, 'log', {enumerable: false});
console.log(log);
console.log();
