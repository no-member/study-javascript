const DAY_PER_PAY = 40;

const calculateCost = function (days) {
    const regularCost = DAY_PER_PAY * days;
    if (days < 3) {
        return regularCost;
    }
    return regularCost - 20;1
};

module.exports = calculateCost;