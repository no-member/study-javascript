const cart = [{name: 'Widget', price: 9.95}, {name: 'Gadget', price: 22.95}];

const names = cart.map(x => x.name);
console.log(names);
console.log();

const prices = cart.map(x => x.price);
console.log(prices);
console.log();

const discountPrices = prices.map(x => x * 0.8);
console.log(discountPrices);
console.log();
