const DAY_PER_PAY = 40;

const calculateCost = function (days) {
    return DAY_PER_PAY * days;
};

module.exports = calculateCost;