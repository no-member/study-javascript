const cards = [];
for (let suit of ['H', 'C', 'D', 'S']) {
    for (let value = 1; value <= 13; value++) {
        cards.push({suit, value});
    }
}

console.log(cards);
console.log();

console.log(
    cards.filter(card => card.value === 2)
);
console.log();

console.log(
    cards.filter(card => card.suit === 'D')
);
console.log();

console.log(
    cards.filter(card => card.value > 10)
);
console.log();

console.log(
    cards.filter(card => card.value > 10 && card.suit === 'H')
);
console.log();
