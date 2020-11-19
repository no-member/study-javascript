const f1 = function () {
    return "hello!";
}
console.log(f1());

const arrow_f1 = () => "hello!";
console.log(arrow_f1());
console.log();

const f2 = function (name) {
   return `Hello, ${name}!`;
}
console.log(f2("world"));

const arrow_f2 = name => `Hello, ${name}!`;
console.log(arrow_f2("world"));
console.log();

const f3 =function (a, b) {
    return a + b;
}
console.log(f3(10, 20));

const arrow_f3 = (a, b) => a + b;
console.log(arrow_f3(10, 30));
