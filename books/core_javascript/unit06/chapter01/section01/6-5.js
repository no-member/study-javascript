const Person = function (name) {
    this.name = name;
};

const p1 = new Person('사람1');
const p1Proto = Object.getPrototypeOf(p1);
const p2 = new Person.prototype.constructor('사람2');
const p3 = new p1Proto.constructor('사람3');
const p4 = new p1.__proto__.constructor('사람4');
const p5 = new p1.constructor('사람5');

[p1, p2, p3, p4, p5].forEach(function(p) {
    console.log(p, p instanceof Person);
});
