const centuryFromYear = function (years) {
    return Math.floor((years + 99) / 100);
};

module.exports = centuryFromYear;
