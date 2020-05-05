const bonusCalculate = function (salary, canReceiveBonus) {
    return '£' + (canReceiveBonus ? 10 : 1) * salary;
};

module.exports = bonusCalculate;
