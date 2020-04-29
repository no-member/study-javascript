const greet = require('./Greeter');

test('greet("Bob")은 "Hello, Bob!"을 반환함',() =>{
    expect(greet('Bob')).toBe('Hello, Bob!');
});