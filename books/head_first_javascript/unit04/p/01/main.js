const bubbleScores =
  [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

const getMaxScore = function(scores) {
  return Math.max(...scores);
};

const getScoreLength = function(scores) {
  return bubbleScores.length;
};

const getMaxScoreIndex = function(scores) {
  const maxScore = getMaxScore(scores);
  return scores.reduce((a, e, i) => (e === maxScore) ? a.concat(i) : a, []);
};

const showResult = function (scores) {
    scores.map(
      (point, i) =>
        console.log(`비눗방울 용액 #${i} 점수 : ${point}`));

    console.log();
    console.log(`비눗방울 실험 횟수 : ${getScoreLength(scores)}`);
    console.log(`최고 빗방울 점수 : ${getMaxScore(scores)}`);
    console.log(getMaxScoreIndex(scores));
}

showResult(bubbleScores)

