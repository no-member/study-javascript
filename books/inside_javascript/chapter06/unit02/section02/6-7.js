function Person(arg) {
    this.name = arg;
};

Person.prototype.setName = function(name) {
    this.name = name;
};

Person.prototype.getName = function() {
    return this.name;
};

function Student(arg) {
}

const you = new Person('iamhjoo');
Student.prototype = you;

var me = new Student('zzoon');
me.setName('zzoon');
console.log(me.getName());

