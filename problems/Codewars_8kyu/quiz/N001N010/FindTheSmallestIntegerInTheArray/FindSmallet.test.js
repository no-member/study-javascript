const findSmallest = require('./FindSmallest');

describe('FindSmallest', () => {
    describe('#findSmallest', () => {
        context('([1, 2])는', () => {
            it('1을 반환한다.', () => {
                expect(findSmallest([1, 2])).toBe(1);
            });
        });

        context('([78, 56, 232, 12, 8])는', () => {
            it('8을 반환한다.', () => {
                expect(findSmallest([78, 56, 232, 12, 8])).toBe(8);
            });
        });

        context('([34, -345, -1, 100])는', () => {
            it('-345을 반환한다.', () => {
                expect(findSmallest([34, -345, -1, 100])).toBe(-345);
            });
        });
    });
});
