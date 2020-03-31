const vowelCount = function (str) {

    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const stringList = [...str];

    let answer = 0;

    for (let i = 0; i < stringList.length; i++) {
        const char = stringList[i];
        for (let j = 0; j < vowel.length; j++) {
            if (char === vowel[j]) {
                answer += 1;
                break;
            }
        }
    }

    return answer;
};

module.exports = vowelCount;