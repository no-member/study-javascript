const PrinterErrors = require('./PrinterErrors');

test('PrinterErrors(s)은 "3/56"를 반환함', () => {
  const s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
  expect(PrinterErrors.printerErrors(s)).toBe('3/56');
});

test('PrinterErrors(s)은 "1/3"를 반환함', () => {
  const s = 'aez';
  expect(PrinterErrors.printerErrors(s)).toBe('1/3');
});
