const booleanToString = require('./BooleanToString');

test('booleanToString(true)은 "true"를 반환함',() =>{
    expect(booleanToString(true)).toBe('true');
});

test('booleanToString(false)은 "false"를 반환함',() =>{
    expect(booleanToString(false)).toBe('false');
});
