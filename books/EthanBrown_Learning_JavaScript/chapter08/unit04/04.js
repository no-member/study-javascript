const cards = [];
for (let suit of ['H', 'C', 'D', 'S']) {
    for (let value = 1; value <= 13; value++) {
        cards.push({suit, value});
    }
}

const cardToString = (function() {
    const suits = {'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'};
    const values = {1: 'A', 11: 'J', 12: 'Q', 13: 'K'}

    return function cardTodString (card) {
        for (let i = 2; i < 10; i++) {
            values[i] = i;
        }
        return values[card.value] + suits[card.suit];
    }
})();

console.log(
    cards.filter(card => card.value === 2)
        .map(cardToString)
);
console.log();

console.log(
    cards.filter(card => card.value > 10 && card.suit === 'H').map(cardToString)
);
console.log();
