function addThreeSquareAddFiveTakeSquareRoot(x) {
    return Math.sqrt(Math.pow(x + 3, 2) + 5);
}

const answer = (addThreeSquareAddFiveTakeSquareRoot(5) +
    addThreeSquareAddFiveTakeSquareRoot(2)) /
    addThreeSquareAddFiveTakeSquareRoot(7);

console.log(answer);
console.log();

const f = addThreeSquareAddFiveTakeSquareRoot;
const same_answer = (f(5) + f(2)) / f(7);
console.log(same_answer);