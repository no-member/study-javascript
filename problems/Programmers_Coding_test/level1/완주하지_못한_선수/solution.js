const solution = (participant, completion) => {
    participant.sort();
    completion.sort();
    let i = 0;
    for (i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
};

module.exports = solution;

