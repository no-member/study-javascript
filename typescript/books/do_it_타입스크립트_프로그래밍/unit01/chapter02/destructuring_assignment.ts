let person = {
    name: 'Jane',
    age: 22
}

let {name, age} = person

console.log(name);
console.log(age);
console.log('');

const array = [1, 2, 3, 4]
let [head, ...rest] = array

console.log(head);
console.log(rest);

let a = 1;
let b = 3;

[a, b] = [b, a];

console.log(a);
console.log(b);
