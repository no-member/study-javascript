const input = "One two three";

console.log(input.replace(/two/, '($`)'));
console.log();

console.log(input.replace(/two/, '($&)'));
console.log();

console.log(input.replace(/two/, "($')"));
console.log();

console.log(input.replace(/two/, "($$)"));
console.log();
