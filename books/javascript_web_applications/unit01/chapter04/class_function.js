var Class = function() {
    var klass = function() {
        this.init.apply(this, arguments);
    };

    klass.prototype.init = function() {};

    return klass;
}

var Person = new Class;

Person.prototype.init = function() {
    // Person을 인스턴스화할 때 호출된다.
};

//사용방법
var person = new Person();
