const before = {
    d: new Date().valueOf()
};
console.log(typeof before.d);
console.log();

const json = JSON.stringify(before);
const after = JSON.parse(json);
console.log(typeof after.d);
console.log();

const d = new Date(after.d);
console.log(d);