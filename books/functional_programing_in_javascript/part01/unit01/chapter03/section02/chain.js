let enrollment = [
  { enrolled: 2, grade: 100 },
  { enrolled: 2, grade: 80 },
  { enrolled: 1, grade: 89 }
];

// 절차형 프로그래밍
let totalGrades = 0;
let totalStudentFound = 0;

for(let i = 0; i < enrollment.length; i++) {
  let student = enrollment[i];

  if(student === null) {
    continue;
  }

  if(student.enrolled > 1) {
    totalGrades += student.grade;
    totalStudentFound += 1;
  }
}

const average = totalGrades / totalStudentFound;

console.log(average);
console.log();

const _ = require('lodash');

// 함수형 프로그래밍
console.log(
  _.chain(enrollment)
  .filter(student => student.enrolled > 1)
  .map('grade')
  .mean()
  .value()
);

