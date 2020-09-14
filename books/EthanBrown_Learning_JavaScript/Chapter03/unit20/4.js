let o = {a: 1};
let p = o;
console.log(p === o);

o = {a: 2};
console.log(p === o);
console.log('o', o);
console.log('p', p);

