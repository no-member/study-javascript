const randomLoc = Math.floor(Math.random() * 5);
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk === false) {
  guess = ("준비, 조준, 발사! (0에서 6까지 중 추측한 숫자를 입력하세요):");
  if (!(0 <= guess && guess <= 6)) {
    alert("올바른 방 번호를 입력하세요!")
    continue
  }

  guesses += 1;

  if (guess === location1 || guess === location2 || guess === location3) {
    hits += 1;
    alert("명중!");
  } else {
    alert("실패");
    continue
  }

  if (hits === 3) {
    isSunk = true;
    alert("전함 침몰!");
  }
}

alert(`여러분은 전함을 격침시키기 위해 ${guesses}번 발사했습니다.
  따라서 명중률을 ${3 / guesses}입니다.`);
