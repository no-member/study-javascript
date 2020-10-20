const Constructor = function (name) {
    this.name = name;
};

Constructor.prototype.method1 = function() {};
Constructor.prototype.prototype1 = 'Constructor Prototype Prototype';

const instance = new Constructor('Instance');
console.dir(Constructor);
console.dir(instance);
console.log('');

const arr = [1, 2];
console.dir(Array);
console.dir(arr);
