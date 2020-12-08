const html = `<img alt='A "simple" example.'> <img alt="Don't abusue it!">`;

const matches1 = html.match(/<img alt=(['"]).*?\1/g);
const matches2 = html.match(/<img alt=(['"]).*\1/g);

console.log(matches1);
console.log();

console.log(matches2);

