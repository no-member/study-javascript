function Person(name) {
    this.name = name;
}

console.log(Person.prototype.constructor);

const foo = new Person('foo');
console.log(foo.country);

Person.prototype = {
    country: 'korea'
};

console.log(Person.prototype.constructor);
console.log('');

const bar = new Person('bar');
console.log('foo.country : ', foo.country);
console.log('bar.country : ', bar.country);
console.log('foo.constructor : ', foo.constructor);
console.log('bar.constructor : ', bar.constructor);

