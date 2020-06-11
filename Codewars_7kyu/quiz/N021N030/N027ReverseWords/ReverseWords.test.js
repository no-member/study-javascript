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

    describe('with a many words', () => {
        it('should return reversed word test1', function () {
            expect(ReverseWords.reverse('hi my friend')).toStrictEqual('ih ym dneirf');
        });
    });
});

describe('#reverseOneWord', () => {
    describe('with no params', () => {
        it('should return error', function () {
            expect(() => ReverseWords.reverseOneWord().toThrowError());
        });
    });
    describe('with a one word', () => {
        it('should return reversed one word test1', function () {
            expect(ReverseWords.reverseOneWord('hi')).toStrictEqual('ih');
        });
    });
    describe('with more than one word', () => {
        it('should return error', function () {
            expect(() => ReverseWords.reverseOneWord('hi my friend').toThrowError());
        });
    });
});
