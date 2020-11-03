Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
};

function Person(name) {
    this.name = name;
}

Person.method('setName', function(name) {
    this.name = name;
});

Person.method('getName', function() {
    return this.name;
});

const me = new Person('me');
const you = new Person('you');
console.log(me.getName());
console.log(you.getName());
