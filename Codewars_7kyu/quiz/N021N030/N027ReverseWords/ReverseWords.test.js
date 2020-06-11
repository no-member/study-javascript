const ReverseWords = require('./ReverseWords');

describe('#reverseSentence', () => {
    describe('with a one word', () => {
        it('should return reversed word test1', function () {
            expect(ReverseWords.reverseSentence('hi')).toStrictEqual('ih');
        });

        it('should return reversed word test2', function () {
            expect(ReverseWords.reverseSentence('word')).toStrictEqual('drow');
        });
    });

    describe('with a many words', () => {
        it('should return reversed word test1', function () {
            expect(ReverseWords.reverseSentence('hi my friend')).toStrictEqual('ih ym dneirf');
        });

        it('should return reversed word test2', function () {
            expect(ReverseWords.reverseSentence('hi my')).toStrictEqual('ih ym');
        });
    });

    describe('with a many words have a lot of white space', () => {
        it('should return reversed word test1', function () {
            expect(ReverseWords.reverseSentence('hi  my   friend')).toStrictEqual('ih  ym   dneirf');
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
