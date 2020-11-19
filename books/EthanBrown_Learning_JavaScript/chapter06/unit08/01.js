const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

function greet() {
    return `Hello, I'm ${this.name}!`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));
