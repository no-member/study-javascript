const coefficients = {
  a: 1,
  c: 3
};

const betterCoefficients = new Proxy(coefficients, {
  get(target, key) {
    return target[key] || 0;
  },
});

function evaluate(x, co) {
  return co.a + co.b * x + co.c * Math.pow(x, 2);
}

console.log(
  evaluate(5, coefficients)
);

console.log(
  evaluate(5, betterCoefficients)
);
