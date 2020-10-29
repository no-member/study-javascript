const countShortest = function(sentence) {
  return Math.min(...sentence.split(' ').map((str) => str.length));
};

module.exports = countShortest;
