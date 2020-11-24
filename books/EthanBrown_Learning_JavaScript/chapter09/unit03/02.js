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
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();

function makeInsurable(o) {
    o[ADD_POLICY] = function (p) {
        this[_POLICY] = p;
    }
    o[GET_POLICY] = function () {
        return this[_POLICY];
    }
    o[IS_INSURED] = function () {
        return !!this[_POLICY];
    }
}