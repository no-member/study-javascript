class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}

Person.nextId = 0;
const jamie = new Person('Jamie');
const juliet = new Person('Juliet');
const peter = new Person('Peter');
const jay = new Person('Jay');

const arr = [jamie, juliet, peter, jay];

console.log(arr.find(person => person.id === juliet.id));

console.log(arr.find(function (person) {
    return person.id === this.id;
}, juliet));
