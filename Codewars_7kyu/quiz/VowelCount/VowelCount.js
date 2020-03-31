const vowelCount = function (str) {

    const stringList = [...str];
    let answer = 0;
    for (let i = 0; i < stringList.length; i++) {
        const char = stringList[i];
        if (temp(char)) {
            answer += 1;
        }
    }
    return answer;
};

const temp = function (char) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowel.length; i++) {
        if (char === vowel[i]) {
            return true;
        }
    }
    return false;
};

module.exports = vowelCount;