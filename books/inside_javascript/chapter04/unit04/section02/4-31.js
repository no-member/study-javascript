const Person = function(name, age, gender) {
    if(!(this instanceof arguments.callee)) {
        return new Person(name, age, gender);
    }
    this.name = name;
    this.age = age;
    this.gender = gender;
};

const foo = {};
var bar = {};

console.dir(Person.apply(foo, ['foo', 30, 'man']));
console.dir(foo);
console.log('');

Person.apply(bar, ['bar', 30, 'man'])
console.dir(bar);

