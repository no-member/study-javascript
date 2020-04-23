const nbYear = function (p0, percent, aug, p) {
    if (p0 >= p) {
        return 0;
    }

    return nbYear(p0 + (p0 * percent / 100) + aug, percent, aug, p) + 1;
};

module.exports = nbYear;