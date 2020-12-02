const moment = require('moment-timezone');

const d = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();
console.log(d);
console.log(d.valueOf());
console.log();

const s = moment.tz([2016, 3, 27, 9, 19], 'Asia/Seoul').toDate();
console.log(s);
console.log(s.valueOf());
console.log();
