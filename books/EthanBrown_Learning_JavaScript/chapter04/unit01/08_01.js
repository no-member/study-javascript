let funds = 50;

const rand = function(min, max) {
    return min + Math.floor((max - min + 1) * Math.random());
}

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
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

let remaining = totalBet;

do {
    let bet = rand(1, remaining);
    let face = randFace();
    bets[face] = bets[face] + bet;
    remaining = remaining - bet;
} while(0 < remaining);

const hand = [];
for(let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
}

let winnings = 0;
for(let die = 0; die < hand.length; die++) {
    let face = hand[die];
    if(bets[face] > 0) {
        winnings = winnings + bets[face];
    }
}
funds = funds + winnings;
