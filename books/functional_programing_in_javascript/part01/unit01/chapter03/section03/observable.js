// 명령형 프로그래밍
let valid = false;

const elem = document.querySelector('#student-ssn');
elem.onkeyup = function(event) {
  let val = elem.value;
  if(val === null || val.length === 0) {
    console.log(`잘못된 SSN: ${val}!`);
    return;
  }

  val = val.replace(/^\s*|\s*$|-s/g, '');
  if(val.length === 9) {
    console.log(`올바른 SSN: ${val}!`);
    valid = true;
  }
}

console.log(valid);

// 함수형 프로그래밍
const Rx = require('rxjs/Rx');

Rx.Observable.fromEvent(document.querySelector('#student-ssn'), 'keyup')
  .pluck('scrElement', 'value')
  .map(ssn => ssn.replace(/^\s*|\s*$|-s/g, ''))
  .filter(ssn => ssn !== null && ssn.length === 9)
  .subscribe(validSsn => {
    console.log(`올바른 SSN: ${validSsn}!`);
});
