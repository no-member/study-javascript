const taxRate = 0.1;
const total = 100 + (100 * taxRate);
// 100행의 코드
return `구매 금액은 ${total}입니다.`;

const cart = [
  {
    name: 'hi',
    discountable: true
  },
  {
    name: 'hello',
    discountable: true
  },
  {
    name: 'oha',
    discountable: false
  },
]

const discountable = cart.filter(item => item.discountable);

