var Class = function() {
    var klass = function() {
        this.init.apply(this, arguments);
    };

    klass.prototype.init = function() {};

    // 프로토타입의 단축형
    klass.fn = klass.prototype;

    // 클래스의 단축형
    klass.fn.parent = klass;

    // 클래스 프로퍼티 추가
    klass.extend = function(obj) {
        var extended = obj.extended;

        for(var i in obj) {
            klass[i] = obj[i];
        }

        if (extended) {
            extended(klass)
        }
    };


    // 인스턴스 프로퍼티 추가
    klass.include = function(obj) {
        var included = obj.included;
        for(var i in obj) {
            klass.fn[i] = obj[i];
        };

        if(included) {
            included(klass);
        };
    };

    return klass;
};
