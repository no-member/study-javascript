function Person(arg) {
    this.name = arg;

    this.getName = function() {
        return this.name;
    }

    this.setName = function(name) {
        this.name = name;
    };
}

const me = new Person('zzoon');
console.log(me.getName());
console.log('');

me.setName('iamhjoo');
console.log(me.getName());

