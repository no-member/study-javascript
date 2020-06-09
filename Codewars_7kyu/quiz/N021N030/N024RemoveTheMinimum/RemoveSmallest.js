class RemoveSmallest {
    static removeSmallest(numbers) {
        let numbersCopy = [...numbers];
         const minNumber = Math.min(...numbersCopy);

        return numbersCopy.filter(n => n !== minNumber);
    }
}

module.exports = RemoveSmallest;
