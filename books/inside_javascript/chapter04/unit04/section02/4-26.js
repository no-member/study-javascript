var value = 100;

const myObject = {
    value: 1,
    func1: function() {
        this.value += 1;
        console.log('func1() called. this.value : ' + this.value);

        const func2 = function() {
            this.value += 1;
            console.log('func2() called. this.value : ' + this.value);

            const func3 = function() {
                this.value += 1;
                console.log('func3() called. this.value : ' + this.value);
            };

            func3();
        };

        func2();
    }
};

myObject.func1();
