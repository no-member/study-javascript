function getGreeting() {
    return "Hello world!";
}

console.log(getGreeting());
console.log(getGreeting);
console.log();

const f = getGreeting;
console.log(f());