const find = function(numbers) {
    console.log(numbers.split(" ").sort());
    const numbersList = numbers.split(" ").sort();
    return `${numbersList[numbersList.length - 1]} ${numbersList[0]}`;
};

module.exports = find;

