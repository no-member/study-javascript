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

// 클래스에 함수 추가하는 방법
Person.find = function(id) {
    //.....
};

// 인스턴스(static) 함수 추가하는 방법
Person.prototype.breath = function() {
    //.....
};
