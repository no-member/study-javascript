const sumDigits = (number) => {
    return toDigitsArray(toAbs(number))
        .reduce(function (accumulator, current) {
            return accumulator + current;
        });
};

const toAbs = function (number) {
    return Math.abs(number);
}

const toDigitsArray = function (number) {
    return number.toString().split('')
        .map(stringDigit => parseInt(stringDigit));
}

module.exports = sumDigits;
