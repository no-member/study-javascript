const before = {d: new Date()};
console.log(before.d instanceof Date);
console.log();

const json = JSON.stringify(before);
const after = JSON.parse(json);
console.log(after.d instanceof Date);
console.log(typeof after.d);
console.log();

after.d = new Date(after.d);
console.log(after.d  instanceof Date);
console.log();
