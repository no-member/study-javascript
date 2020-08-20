const stooge = {
    "first-name": "Jerome",
    "last-name": "Howard",
    "": "my Boss",
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
console.log(nick);

let a = {}, b = {}, c = {};

a = b = c = {};

