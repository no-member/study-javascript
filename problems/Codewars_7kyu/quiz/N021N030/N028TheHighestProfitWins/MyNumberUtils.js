class MyNumberUtils {
  static minMax(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return [min, max];
  }
}

module.exports = MyNumberUtils;
