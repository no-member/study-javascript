const moment = require('moment-timezone');

let m = moment();
m.add(3, 'days');
console.log(m);
console.log();

m.subtract(2, 'year');
console.log(m);
console.log();

m = moment();
m.startOf('year');
console.log(m);
console.log();

m.endOf('month');
console.log(m);
console.log();

