const DAY_PER_PAY = 40;

const calculateCost = function (days) {
    const regularCost = DAY_PER_PAY * days;
    if (days < 3) {
        return regularCost;
    }
    if (days < 7) {
        return regularCost - 20;
    }

    return regularCost - 50;
};

module.exports = calculateCost;