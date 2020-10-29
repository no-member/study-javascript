const jadenCasting = function(sentence) {
  return sentence.split(' ').map((word) => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ');
};

// String.prototype.toJadenCase = function () {
//     return this.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ');
// };

// String.prototype.toJadenCase = function () {
//     return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
// };

module.exports = jadenCasting;
