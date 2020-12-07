const beer99 = "99 bottles of beer on the wall " +
    "take 1 down and pass it around -- " +
    "98 bottles of beer on the wall.";

const matches1 = beer99.match(/[-0-9a-z.]/ig);
const matches2 = beer99.match(/[^-0-9a-z.]/ig);

console.log(matches1);
console.log(matches2);
console.log();

