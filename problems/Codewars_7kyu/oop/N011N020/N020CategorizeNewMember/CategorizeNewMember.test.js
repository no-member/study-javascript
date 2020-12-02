const CategorizeNewMember = require('./CategorizeNewMember');

test('sumTwoSmallestNumbers test1', () => {
  expect(CategorizeNewMember.openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
      .toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);
});

test('sumTwoSmallestNumbers test2', () => {
  expect(CategorizeNewMember.openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]))
      .toStrictEqual(['Open', 'Open', 'Open', 'Open']);
});

test('sumTwoSmallestNumbers test3', () => {
  expect(CategorizeNewMember.openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]))
      .toStrictEqual(['Senior', 'Open', 'Open', 'Open']);
});
