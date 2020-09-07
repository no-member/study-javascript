const rand = function(min, max) {
    return min + Math.floor((max - min + 1) * Math.random());
}

const randFace = function() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

let funds = 50;
let round = 0;

while(1 < funds && funds < 100) {
    round ++;
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`);
    // 돈을 겁니다.
    let bets = {
        crown: 0,
        anchor: 0,
        heart: 0,
        spade: 0,
        club: 0,
        diamond: 0,
    };
    let totalBet = rand(1, funds);

    if(totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        // 판돈을 나눕니다.
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] += bet;
            remaining -= bet;
        } while(remaining > 0);
    }
    funds -= totalBet;
    console.log('\tbets: ' +
    Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
        ` (total: ${totalBet} pence)`);

    const hand = [];
    for(let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(', ')}`);

    // 딴 돈을 가져옵니다.
    let winnings = 0;
    for(let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if(bets[face] > 0) {
            winnings += bets[face];
        }
    }
    funds += winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);
