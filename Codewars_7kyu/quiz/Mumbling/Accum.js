const accum = function(str) {
    let answer = '';
    let charList = [...str];
    for (let i = 0; i < str.length; i++) {
        for(let j = 0; j < i + 1 ; j++) {
            if (j === 0) {
                answer += charList[i].toUpperCase();
                continue;
            }
            answer += charList[i].toLowerCase();
        }
        if (i !== str.length -1) {
            answer += '-';
        }
    }
    return answer;
};

module.exports = accum;
