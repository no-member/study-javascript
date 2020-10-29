const getMiddle = function(str) {
  // const length = str.length;
  // const halfLength = length / 2;
  // let answer;
  //
  // if (length % 2 === 1) {
  //     answer = str.slice(halfLength, halfLength + 1);
  //     return answer;
  // }
  //
  // answer = str.slice(halfLength - 1, halfLength + 1);
  // return answer;

  return str.slice((str.length - 1) / 2, str.length / 2 + 1);
};

module.exports = getMiddle;
