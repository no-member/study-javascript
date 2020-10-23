const person: object = {
    name: 'Jack',
    age: 32
};
console.log(person);
console.log('');

(<{name: string}>person).name = 'Hello'

console.log(person);
