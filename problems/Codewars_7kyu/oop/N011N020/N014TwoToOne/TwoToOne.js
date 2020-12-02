class TwoToOne {
  static longest(str1, str2) {
    // const array = [...(str1 + str2)];
    // return this.removeDuplicates(array).sort().join('');
    return [...new Set(str1 + str2)].sort().join('');
  }

  // static removeDuplicates(array) {
  //     return array.filter((a, b) => array.indexOf(a) === b);
  // }
}

module.exports = TwoToOne;
