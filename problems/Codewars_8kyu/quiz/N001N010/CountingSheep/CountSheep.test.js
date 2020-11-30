const countSheep = require('./CountSheep');

describe('CountSheep', () => {
    context('([true, true, false])는', () => {
        it('2를 반환함', () => {
            const list = [true, true, false];
            expect(countSheep(list)).toBe(2);
        });
    });

    context('([true, true, false, false, true])는', () => {
        it('3를 반환함', () => {
            const list = [true, true, false, false, true];
            expect(countSheep(list)).toBe(3);
        });
    });

    context('([null, true, false, false])는', () => {
        it('1을 반환함', () => {
            const list = [null, true, false, false];
            expect(countSheep(list)).toBe(1);
        });
    });

    context('(null)의 경우', () => {
        it('0을 반환함', () => {
            const list = null;
            expect(countSheep(list)).toBe(0);
        });
    });
});
