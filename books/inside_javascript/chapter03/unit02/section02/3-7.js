const foo = {
    name: 'foo',
    major: 'computer science'
};

console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);
console.log('');

foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);
console.log('');

foo['full-name'] = 'foo bar';
console.log(foo['full-name']);
console.log(foo.full-name);
console.log(foo.full);
console.log(name);
