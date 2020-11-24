const arr = [{name: "Suzanne"}, {name: "Jim"}, {name: "Trevor"}, {name: "Amanda"}];

arr.sort();
console.log(arr);
console.log();

arr.sort((a, b) => a.name.length - b.name.length);
console.log(arr);
console.log();

arr.sort((a, b) => a.name.localeCompare(b.name));
console.log(arr);
console.log();

arr.sort((a, b) => a.name[1].localeCompare(b.name[1]));
console.log(arr);
console.log();
