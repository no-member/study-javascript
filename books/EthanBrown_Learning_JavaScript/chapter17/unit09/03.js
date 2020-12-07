const success = '  something   ';
const fail = '      ';

const valid1 = /\S/.test(success);
const valid2 = /\S/.test(fail);

console.log(valid1);
console.log(valid2);
