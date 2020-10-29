class Factorial {
  factorial(n) {
    if (n < 1) {
      return 1;
    }

    return n * this.factorial(n - 1);
  }
}

module.exports = Factorial;
