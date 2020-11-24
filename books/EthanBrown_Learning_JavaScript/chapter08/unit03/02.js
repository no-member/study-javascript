const arr = [{id: 5, name: 'Judith'}, {id: 7, name: 'Francis'}];

console.log(arr.findIndex(o => o.id === 5));
console.log(arr.findIndex(o => o.name === 'Francis'));
console.log();

console.log(arr.findIndex(o => o === 3));
console.log(arr.findIndex(o => o.id === 17));
console.log();
