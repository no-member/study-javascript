const Points = (function () {
    function Points() {
    }

    Points.sum = function (games) {
        return games.map(game => this.compare(game.split(':')))
            .reduce((x, y) => x + y, 0);
    };

    Points.compare = function (game) {
        const [firstNumber, secondNumber] = [...game];

        if (firstNumber > secondNumber) {
            return 3;
        }
        if (firstNumber < secondNumber) {
            return 0;
        }
        return 1;
    };

    return Points;
})();

module.exports = Points;
