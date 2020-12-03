const moment = require('moment-timezone');

let m = moment()
    .add(10, 'hours')
    .subtract(3, 'days')
    .endOf('month');

console.log(m);