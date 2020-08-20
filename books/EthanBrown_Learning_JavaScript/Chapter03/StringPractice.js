// escape

const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.';
const imperative = "Don't do that!";

const dialog1 ="He looked up and saild \"dont't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
const s = "In JavaScript, us \\as an escape character in strings.";

console.log('');

let currentTmp = 19.5;
// 문자열 병합을 이용한 방법
const message = "The current temperate is " + currentTmp + "\u00b0C"
console.log(message);

// 문자열 템플릿을 이용한 방법
const message2 = `The current temparate is ${currentTmp}\u00b0c`
console.log(message2);
console.log('');

// 여러 줄 문자열
const multiline = "line1\
line2";
console.log(multiline);
console.log('')

const multiline2 = "line1\n\
line2";
console.log(multiline2);
console.log('');

const multiline3 = `line1
line2`;
console.log(multiline3);
console.log('');

const multiline4 = `line1
    line2
    line3`
console.log(multiline4);
console.log('');

const multiline5 = 'line1\n'
    + 'line2\n'
    + 'line3'
console.log(multiline5);
console.log('');

// 순자와 문자열

const result1 = 3 + '30';
console.log(result1);
const result2 = 3 * '30';
console.log(result2);
console.log('');

