const getSum = function(num1, num2) {
  return (num1 + num2) * (Math.abs(num1 - num2) + 1) / 2;

  // const min = Math.min(num1, num2);
  // const max = Math.max(num1, num2);
  // return (max - min + 1) * (min + max) / 2;
};

module.exports = getSum;
