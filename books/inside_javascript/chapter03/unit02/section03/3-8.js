const foo = {
    name: 'foo',
    age: 30,
    major: 'computer science'
};

for(let prop in foo) {
    console.log(prop, foo[prop]);
}

