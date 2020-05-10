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

for (let name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
       console.log(name + ':' + another_stooge[name]);
    }
}

console.log();

for (let name in another_stooge) {
    if (typeof another_stooge[name] !== 'function' && another_stooge.hasOwnProperty(name)) {
        console.log(name + ':' + another_stooge[name]);
    }
}

console.log();

let properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];

for(let i = 0; i < properties.length; i++) {
    console.log(`${properties[i]} : ${another_stooge[properties[i]]}`)
}