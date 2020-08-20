class ReverseWords {
    static reverseSentence(words) {
        if (words === undefined) {
            return new Error('Please input words')
        }
        
        return words.split(' ').map(this.reverseOneWord).join(' ');
    }

    static reverseOneWord(word) {
        if (word === undefined ){
            throw new Error('Please input a word')
        }
        if (word.split(' ').length !== 1){
            throw new Error(`${word} is not a word`)
        }

        return [...word].reverse().join('');
    }
}

module.exports = ReverseWords;
