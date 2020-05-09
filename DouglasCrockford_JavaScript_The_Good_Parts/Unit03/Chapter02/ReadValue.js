const emptyObject = {};
const stooge = {
    "first_name": "Jerome",
    middle_name: "K",
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

console.log(stooge["first_name"]);
console.log(stooge.first_name);

console.log(stooge.middle_name);
console.log(stooge["middle_name"]);

// 아래의 값은 반드시 ""를 사용해서 표기해 줘야만 한다.
console.log("stooge['last-name'] :", stooge["last-name"]);

// 빈 문자열도 이름 값으로 사용 가능
console.log('빈 문자얄 :', stooge[""]);

// 없는 속성을 읽으면 undefined를 반환한다.
console.log('stooge["my-big-brother"] :', stooge["my-big-brother"]);

console.log(flight.departure.IATA);

// ||를 사용해서 기본 값을 지정 가능
const bigBrother = stooge["myBigBrother"] || "(none)";
console.log('bigBrother :', bigBrother);

// &&를 사용해서 TypeError를 막을 수 있음
console.log(flight.equipment);
// console.log(flight.equipment.model); // TypeError 발생
console.log(flight.equipment && flight.equipment.model);

if (undefined) {
    console.log('undefined is true!');
}
