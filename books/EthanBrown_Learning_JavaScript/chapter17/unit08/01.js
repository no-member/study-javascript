const beer99 = "99 bottles of beer on the wall " +
    "take 1 down and pass it around -- " +
    "98 bottles of beer on the wall.";

const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);

console.log(matches);
console.log();

const more_effective_matches1 = beer99.match(/[0123456789]/g);
console.log(more_effective_matches1);
console.log();

const more_effective_matches2 = beer99.match(/[0-9]/g);
console.log(more_effective_matches2);
console.log();

