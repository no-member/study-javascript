const PrinterErrors = require('./PrinterErrors');

test('PrinterErrors(1)은 1를 반환함', () => {
    const s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    expect(PrinterErrors.printerErrors(s)).toBe('3/56');
});
