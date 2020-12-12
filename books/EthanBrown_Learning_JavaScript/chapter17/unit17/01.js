const input = "It was the bestd of times, it was the worst of times";

const beginning = input.match(/^\w+/g);
console.log(beginning);
console.log();

const end = input.match(/\w+$/g);
console.log(end);
console.log();

const everything = input.match(/^.*$/g);
console.log(everything);
console.log();

const nomatch1 = input.match(/^best/ig);
console.log(nomatch1);
console.log();

const nomatch2 = input.match(/worst$/ig);
console.log(nomatch2);
console.log();


const test = input.match(/(bes\w*)/g);
console.log(test);
console.log();

const test2 = input.match(/(bes\w*)/g);
console.log(test2);
console.log();

