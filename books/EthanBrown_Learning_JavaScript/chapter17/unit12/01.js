const text = "Vist oreilly.com today!";

const match_capture = text.match(/[a-z]+(\.com|\.org|\.edu)/i);
console.log(match_capture);
console.log();

const match_none_capture = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
console.log(match_none_capture);
console.log();
