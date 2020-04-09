const find = function(numbers) {
    const numbersList = numbers.split(" ").sort((a, b) => a - b);
    return `${numbersList[numbersList.length - 1]} ${numbersList[0]}`;
};

module.exports = find;

