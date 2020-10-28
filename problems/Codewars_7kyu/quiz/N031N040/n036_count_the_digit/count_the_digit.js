const nbDig = function (n, d) {
    const range = function (n) {
        return [...Array(n).keys(), n];
    }

    const squareDigits = range(n).map(x => x * x).join('');
    const regex = new RegExp(d , 'g');
    const matchDigits = squareDigits.match(regex);

    if (matchDigits === null) {
        return 0;
    }
    return matchDigits.length;
}

module.exports = nbDig;
