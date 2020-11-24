class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;

        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
    }

    get userGear() {
        return this._userGear;
    }

    set userGear(value) {
        if (this._userGears.indexOf(value) < 0) {
            throw new Error(`Invalid gear: ${value}`)
        }
        this._userGear = value;
    }

    shift(gear) {
        this.userGear = gear;
    }
}

class InsurancePolicy {}

function makeInsurable(o) {
    o.addInsurancePolicy = function (p) {
        this.insurancePolicy = p;
    }
    o.getInsurancePolicy = function () {
        return this.insurancePolicy;
    }
    o.isInsured = function () {
        return !!this.insurancePolicy;
    }
}

// // error
// makeInsurable(Car);
// const car1 = new Car();
// car1.addInsurancePolicy(new InsurancePolicy());

// const car1 = new Car();
// makeInsurable(car1);
// car1.addInsurancePolicy(new InsurancePolicy());

makeInsurable(Car.prototype);
const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy());
