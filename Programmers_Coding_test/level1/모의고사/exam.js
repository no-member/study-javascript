const solution = function (answers) {
    const firstAnswer = [1, 2, 3, 4, 5];
    let firstAnswerCount = 0;
    const secondAnswer = [2, 1, 2, 3, 2, 4, 2, 5];
    let secondAnswerCount = 0;
    const thirdAnswer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let thirdAnswerCount = 0;

    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        if (firstAnswer[i] === answer) {
            firstAnswerCount++;
        }
        if (secondAnswer[i] === answer) {
            secondAnswerCount++;
        }
        if (thirdAnswer[i] === answer) {
            thirdAnswerCount++
        }
    }

    const answerCountList = [firstAnswerCount, secondAnswerCount, thirdAnswerCount];
    const max = Math.max(...answerCountList);

    let answer = [];
    for (let i = 0; i < answerCountList.length; i++){
       if (answerCountList[i] === max ){
            answer.push(i+1);
       }
    }
    return answer;
};

module.exports = solution;