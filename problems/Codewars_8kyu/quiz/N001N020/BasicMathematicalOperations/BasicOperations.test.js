const basicOperation = require('./BasicOperations');

// test 구조적으로 보이지 않아서 만족스럽지 않지만
// 하나의 함수에 기능 하나라는 원칙을 지키지 않은 결과
describe('BasicOperations', () => {
    describe('#basicOperation', () => {
        context('("+", 1, 2)은', () => {
            it('3을 반환함', () => {
                expect(basicOperation('+', 1, 2)).toBe(3);
            });
        });

        context('("+", -19, 6)은', () => {
            it('-13를 반환함', () => {
                expect(basicOperation('+', -19, 6)).toBe(-13);
            });
        });

        context('("-", 10, 6)은', () => {
            it('4를 반환함', () => {
                expect(basicOperation('-', 10, 6)).toBe(4);
            });
        });

        context('("-", 10, -6)은', () => {
            it('16를 반환함', () => {
                expect(basicOperation('-', 10, -6)).toBe(16);
            });
        });

        context('("*", 2, 12)은', () => {
            it('24을 반환함', () => {
                expect(basicOperation('*', 2, 12)).toBe(24);
            });
        });

        context('("*", 2, -2)은 ', () => {
            it('-4 반환함', () => {
                expect(basicOperation('*', 2, -2)).toBe(-4);
            });
        });

        context('("*", 0, 2)은', () => {
            it('0 반환함', () => {
                expect(basicOperation('*', 0, 2)).toBe(0);
            });
        });

        context('("/", 12, 2)은', () => {
            it('6 반환함', () => {
                expect(basicOperation('/', 12, 2)).toBe(6);
            });
        });

        context('("/", -10, 2)은 ', () => {
            it('-5 반환함', () => {
                expect(basicOperation('/', -10, 2)).toBe(-5);
            });
        });

        context('("/", 2, 0)은', () => {
            it('Error를 발생시킴', () => {
                expect(() => basicOperation('/', 2, 0).toThrow());
            });
        });
    });
})
