const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
console.log(bruce);
console.log();

// 진짜로 중요하다!!!!!!!!!
updateBruce.call(madeline, 1274, "king");
console.log(madeline);
console.log(bruce);