const ReverseWords = require('./ReverseWords');

describe('#reverse', () => {
    describe('with a one word', () => {
        it('should return reversed word test1', function () {
            expect(ReverseWords.reverse('hi')).toStrictEqual('ih');
        });

        it('should return reversed word test2', function () {
            expect(ReverseWords.reverse('word')).toStrictEqual('drow');
        });
    });
});
