const dates = [];

const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;

for (let i = 0; i < 10; i++) {
    dates.push(new Date(min + delta * Math.random()));
}

console.log(dates);
console.log();

// 역순 정렬
dates.sort((a, b) => b - a);
console.log(dates);
console.log();

// 역순 정렬
dates.sort((a, b) => a - b);
console.log(dates);
console.log();
