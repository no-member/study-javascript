class NthSeries {
  static seriesSum(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
      sum += 1 / (i * 3 + 1);
    }

    // return sum.toFixed(2).toString();
    return sum.toFixed(2);
  }
}

module.exports = NthSeries;
