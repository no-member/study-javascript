const Money = require('math-money');

const oneDollar = Money.Dollar(1);
console.log(oneDollar);

const Dollar = Money.Dollar;
const twoDollars = Dollar(2);
console.log(twoDollars);
