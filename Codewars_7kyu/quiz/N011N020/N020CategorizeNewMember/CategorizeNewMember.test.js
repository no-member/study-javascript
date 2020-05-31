const CategorizeNewMember = require('./CategorizeNewMember');

test('sumTwoSmallestNumbers test1', () => {
    expect(CategorizeNewMember.openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
        .toBe(['Open', 'Senior', 'Open', 'Senior']);
});
