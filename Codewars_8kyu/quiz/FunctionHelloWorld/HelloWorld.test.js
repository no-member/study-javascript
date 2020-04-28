const greet = require('./HelloWorld');

test('greet()는 "hello world!"를 반환한다.',() =>{
    expect(greet()).toBe("hello world!");
});