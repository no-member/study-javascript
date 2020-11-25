function isCurrentYearLeapYear() {
    const year = new Date().getFullYear();

    if (year % 4 !== 0) {
        return false;
    }

    if (year % 100 !== 0) {
        return true;
    }

    if (year % 400 !== 0) {
        return false;
    }

    return true;
}

const daysInMonth = [31, isCurrentYearLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log(daysInMonth);

if (isCurrentYearLeapYear()) {
    console.log('It is a leap year.');
}