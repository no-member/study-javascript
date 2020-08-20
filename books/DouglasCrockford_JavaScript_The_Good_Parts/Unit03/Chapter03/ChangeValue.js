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

console.log(stooge["first-name"]);
stooge['first-name'] = 'James';
console.log(stooge["first-name"]);

stooge['middle-name'] = 'Lester';
console.log(stooge['middle-name']);

stooge.nickname = 'Curly';
console.log(stooge.nickname);

flight.equipment = {
    model: 'Boeing 777'
};
console.log(flight.equipment);
flight.status = 'overdue';
console.log(flight.status);
