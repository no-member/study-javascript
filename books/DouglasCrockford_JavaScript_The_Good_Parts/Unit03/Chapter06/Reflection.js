const stooge = {
    "first-name": "Jerome",
    "last-name": "Howard",
};

const flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-23 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

stooge['first-name'] = 'James';

stooge['middle-name'] = 'Lester';

stooge.nickname = 'Curly';

flight.equipment = {
    model: 'Boeing 777'
};

flight.status = 'overdue';

const x = stooge;
x.nickname = 'Curly2';

const nick = stooge.nickname;

let a = {}, b = {}, c = {};

a = b = c = {};

if (typeof Object.create !== 'function') {
    Object.create = function (object) {
        const F = function () {
        };
        F.prototype = object;
        return new F();
    }
}

const another_stooge = Object.create(stooge);

another_stooge["first-name"] = 'Harry';
another_stooge["middle-name"] = 'Moses';
another_stooge.nickname = 'Moe';

stooge.profession = 'actor';

console.log(typeof flight.number);
console.log(typeof flight.status);
console.log(typeof flight.arrival);
console.log(typeof flight.manifest);
console.log();

console.log(typeof flight.toString);
console.log(typeof flight.constructor);

console.log(flight.hasOwnProperty('number'));
console.log(flight.hasOwnProperty('constructor'));

