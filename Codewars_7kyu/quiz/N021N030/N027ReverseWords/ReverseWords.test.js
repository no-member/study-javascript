const ReverseWords = require('./ReverseWords');

describe('#reverse', () => {
    describe('with a one word', () => {
        it('should return reversed word', function () {
            expect(ReverseWords.reverse('hi')).toStrictEqual('ih');
        });
    });
});
