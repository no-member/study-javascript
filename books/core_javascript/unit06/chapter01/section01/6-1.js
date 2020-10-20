const Person = function (name) {
    this._name = name;
};

Person.prototype.getName = function() {
    return this._name;
};

const suzi = new Person('Suzi');

console.log(suzi.__proto__.getName());
console.log(Object.getPrototypeOf(suzi));
console.log('');

suzi.__proto__._name = 'SUZI__proto__';
console.log(suzi.__proto__.getName());

