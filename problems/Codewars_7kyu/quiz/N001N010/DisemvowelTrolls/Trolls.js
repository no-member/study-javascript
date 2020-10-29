const disemvowel = function(str) {
  const answer = str.replace(/[aeiouAEIOU]/g, '');
  return answer;
};

module.exports = disemvowel;
