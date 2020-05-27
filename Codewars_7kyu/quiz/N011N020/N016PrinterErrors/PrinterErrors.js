class PrinterErrors {
    static printerErrors(s) {
        return s.replace(/[a-m]/g, '').length + '/' + s.length
    }
}

module.exports = PrinterErrors;
