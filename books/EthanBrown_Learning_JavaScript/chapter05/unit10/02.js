const obj = {b: 2, c: 3, d: 4}
let a, b, c;

// 에러가 일어납니다.
// {a, b, c} = obj;

({a, b, c} = obj);

console.log(a);
console.log(b);
console.log(c);
