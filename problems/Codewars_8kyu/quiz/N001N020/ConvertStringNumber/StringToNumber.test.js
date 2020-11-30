const stringToNumber = require('./StringToNumber');

describe('StringToNumber', () => {
    describe('#stringToNumber', () => {
        context('양수 ("3")은', () => {
            it('3 반환함', () => {
                expect(stringToNumber('3')).toBe(3);
            });
        });
        context('양수 ("123123")은', () => {
            it('123123을 반환함', () => {
                expect(stringToNumber('123123')).toBe(123123);
            });
        });

        context('("0")은', () => {
            it('0을 반환함', () => {
                expect(stringToNumber('0')).toBe(0);
            });
        });

        context('음수 ("-1213")은', () => {
            it('-1213 반환함', () => {
                expect(stringToNumber('-1213')).toBe(-1213);
            });
        });

        context('음수 ("-123123")은', () => {
            it('-123123을 반환함', () => {
                expect(stringToNumber('-123123')).toBe(-123123);
            });
        });

        context('숫자가 아닌 값을 입력 받았을 경우', () => {
            it('에러를 반환함', () => {
                expect(() => stringToNumber('fail').toThrow());
            });
        });
    });
});
