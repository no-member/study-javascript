class ThisClass {
    log1(message) {
        console.log(message)
    }
    log2() {

    }
}

ThisClass.prototype.log2 = function (new_message) {
   this.log1(new_message)
}

const thisClass = new ThisClass
thisClass.log2("hi")
