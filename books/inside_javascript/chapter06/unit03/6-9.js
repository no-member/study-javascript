const Person = function(arg) {
    var name = arg ? arg : 'zzoon';

    this.getName = function() {
        return name;
    };

    this.setName = function(arg) {
        name = arg;
    };
};

const me = new Person();
console.log(me.getName());
console.log('');

me.setName('iamhjoo');
console.log(me.getName());
console.log('');

console.log(me.name);

