let funds = 50;

const rand = function(min, max) {
    return min + Math.floor((max - min + 1) * Math.random());
}

const bets = {
    crown: 0,
    anchor: 0,
    heart: 0,
    spade: 0,
    club: 0,
    diamond: 0
};

let totalBet = rand(1, funds);

if(totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
} else {
    // 그 판에 걸 돈을 분배합니다.
}

funds = funds - totalBet;

