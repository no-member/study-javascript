const add = function (a, b) {
    return a + b;
};

// 메서드 호출 패턴
const myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
console.log(myObject.value);

myObject.increment(3);
console.log(myObject.value);

// 함수 호출 패턴
let sum = add(3, 4);

myObject.double = function () {
    const that = this;
    const helper = function () {
        that.value = add(that.value, that.value);
    };

    helper();
};

myObject.double();
console.log(myObject.value);

// 생성자 호출 패턴

const Quo = function (string) {
    this.status = string;
};

Quo.prototype.get_status = function () {
    return this.status;
};

const myQuo = new Quo('confused');
console.log(myQuo.get_status());

// apply 호출 패턴
const array = [3, 4];
sum = add.apply(null, array);

console.log(sum);

const statusObject = {
    status: 'A-OK'
};

const status = Quo.prototype.get_status.apply(statusObject);
console.log(status);