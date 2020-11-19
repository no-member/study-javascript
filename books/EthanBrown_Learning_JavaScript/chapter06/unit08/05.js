const bruce = {name: "Bruce"};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

const updateBruce = update.bind(bruce, 1949);
updateBruce("singer songwriter");
console.log(bruce);
