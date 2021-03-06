class RemoveSmallest {
  static removeSmallest(numbers) {
    const numbersCopy = [...numbers];
    const minNumber = Math.min(...numbersCopy);
    const minNumberIndex = numbersCopy.indexOf(minNumber);

    // numbersCopy.splice(minNumberIndex, 1);
    // return numbersCopy;

    // return [...numbersCopy.slice(0, minNumberIndex), ...numbersCopy.slice(numbersCopy + 1)]

    return numbersCopy.filter((n, i) => i !== minNumberIndex );
  }
}

module.exports = RemoveSmallest;
