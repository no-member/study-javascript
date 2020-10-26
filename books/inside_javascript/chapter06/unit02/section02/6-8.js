function Person(name) {
    this.name = name;
}

Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
}

Person.method('setName', function(name) {
    this.name = name;
});

Person.method('getName', function() {
    return this.name;
});

function Student() {}

function F() {};
F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype;

const me = new Student();
me.setName('zzoon');
console.log(me.getName());


