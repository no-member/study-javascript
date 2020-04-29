const stringToNumber = require('./StringToNumber');

describe('양수 테스트', ()=>{
    test('stringToNumber("1")은 1을 반환함',() =>{
        expect(stringToNumber('1')).toBe(1);
    });

    test('stringToNumber("30")은 30을 반환함',() =>{
        expect(stringToNumber('30')).toBe(30);
    });

    test('stringToNumber("1213")은 1213 반환함',() =>{
        expect(stringToNumber('1213')).toBe(1213);
    });

    test('stringToNumber("123123")은 123123을 반환함',() =>{
        expect(stringToNumber('123123')).toBe(123123);
    });
});

describe('0일 경우 테스트', ()=> {
    test('stringToNumber("0")은 0을 반환함',() =>{
        expect(stringToNumber('0')).toBe(0);
    });
});

describe('음수일 경우 테스트', ()=> {
    test('stringToNumber("-1")은 -1을 반환함',() =>{
        expect(stringToNumber('-1')).toBe(-1);
    });

    test('stringToNumber("-30")은 -30을 반환함',() =>{
        expect(stringToNumber('-30')).toBe(-30);
    });

    test('stringToNumber("-1213")은 -1213 반환함',() =>{
        expect(stringToNumber('-1213')).toBe(-1213);
    });

    test('stringToNumber("-123123")은 -123123을 반환함',() =>{
        expect(stringToNumber('-123123')).toBe(-123123);
    });
});
