class RemoveSmallest {
    static removeSmallest(numbers) {
        let numbersCopy = [...numbers];
        const minNumber = Math.min(...numbersCopy);
        const minNumberIndex = numbersCopy.indexOf(minNumber);

        // numbersCopy.splice(minNumberIndex, 1);
        // return numbersCopy;

        return numbersCopy.filter((n, i) => i !== minNumberIndex );
    }
}

module.exports = RemoveSmallest;
