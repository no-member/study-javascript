const Person = (function(arg) {
    let name = arg ? arg : 'zzoon';

    const Func = function() {};
    Func.prototype = {
        getName: function() {
            return name;
        },
        setName: function(arg) {
            name = arg;
        }
    };

    return Func;
})();

const me = new Person();
console.log(me.getName());
console.dir(Person);
console.dir(me);
