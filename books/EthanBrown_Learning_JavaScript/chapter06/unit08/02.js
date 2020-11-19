const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
update.call(madeline, 1942, 'actress');

console.log(bruce);
console.log(madeline);
