class MyClass {
    create() {
        console.log(1)
    }
}

const myClass = new MyClass();
myClass.create()

MyClass.prototype.create = function () {
    console.log(2)
}

const myClass2 = new MyClass();
myClass2.create()

