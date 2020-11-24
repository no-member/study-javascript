class Vehicle {
    constructor() {
        this.passengers = [];
        console.log('Vehicle created');
    }

    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle {}

class Motorcycle extends Vehicle {}

const c = new Car();
const m = new Motorcycle();
console.log(c instanceof Car);
console.log(c instanceof Vehicle);
console.log();

console.log(m instanceof Car);
console.log(m instanceof Motorcycle);
console.log(m instanceof Vehicle);
