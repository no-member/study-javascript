const a = {
    a: 'a',
    b: 'b',
    c: 'c',
}

const A = {...a};
console.log(A);

A.a = 'A'
console.log(A);
console.log(a);