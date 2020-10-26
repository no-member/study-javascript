const Person = function(arg) {
    let name = arg ? arg : 'zzoon';

    return {
        getName: function() {
            return name;
        },
        setName: function(arg) {
            name = arg;
        }
    };
};

const me = new Person();
console.log(me.getName());
console.dir(Person);
console.dir(me);
