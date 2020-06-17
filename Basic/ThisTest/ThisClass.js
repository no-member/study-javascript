const log1 = function () {
    console.log('outside log1 is called')
};

class ThisClass {
    log1() {
        console.log('inside log1 is called')
    }
    log2() {
        this.log1()
    }
    log3() {
        log1()
    }
}

const thisClass = new ThisClass;
thisClass.log2();
thisClass.log3();
