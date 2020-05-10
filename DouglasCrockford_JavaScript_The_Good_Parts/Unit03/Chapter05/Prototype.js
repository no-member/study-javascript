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

console.log(another_stooge);

another_stooge["first-name"] = 'Harry';
another_stooge["middle-name"] = 'Moses';
another_stooge.nickname = 'Moe';

console.log(another_stooge);

// 위에서는 last-name이 없었지만 prototype 내에 있으므로 Howard를 잘 불러옴
console.log(another_stooge["last-name"]);

console.log(stooge);

stooge.profession = 'actor';
console.log(stooge);

console.log(another_stooge.profession);
