const betterThanAverage = function (classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
};

module.exports = betterThanAverage;