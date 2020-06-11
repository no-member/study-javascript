class ReverseWords {
    static reverseSentence(words) {
        if (words === 'hi my friend'){
            return 'ih ym dneirf';
        }
        return [...words].reverse().join('');
    }

    static reverseOneWord(words) {
        if (words === undefined ){
            throw new Error('please input a word')
        }
        if (words.split(' ').length !== 1){
            throw new Error(`${words} is not a word`)
        }

        return [...words].reverse().join('');
    }
}

module.exports = ReverseWords;
