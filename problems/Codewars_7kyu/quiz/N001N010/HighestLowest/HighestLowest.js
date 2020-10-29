const find = function(numbers) {
  // const numbersList = numbers.split(" ").sort((a, b) => a - b);
  // return `${numbersList[numbersList.length - 1]} ${numbersList[0]}`;

  // 다른 해결 방법 1
  const numbersList = numbers.split(' ');
  return `${Math.max(...numbersList)} ${Math.min(...numbersList)}`;
};

module.exports = find;

