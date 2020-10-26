function Person(name) {
    this.name = name;
};

Person.prototype.getName = function() {
    return this.name;
};

Person.prototype.setName = function(name) {
    this.name = name;
};

const me = new Person('me');
const you = new Person('you');

console.log(me.getName());
console.log(you.getName());

