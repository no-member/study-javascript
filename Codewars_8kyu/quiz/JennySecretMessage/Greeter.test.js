const greet = require('./Greeter');

test('greet("Bob")은 "Hello, Bob!"을 반환함',() =>{
    expect(greet('Bob')).toBe('Hello, Bob!');
});

test('greet("Shin")은 "Hello, Shin!"을 반환함',() =>{
    expect(greet('Shin')).toBe('Hello, Shin!');
});

test('greet("Hara")은 "Hello, Hara!"을 반환함',() =>{
    expect(greet('Hara')).toBe('Hello, Hara!');
});
