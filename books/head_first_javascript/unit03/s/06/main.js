let balance = 10500;
let cameraOn = true;

function steal(targetBalance, amount) {
  cameraOn = false;
  if (amount < targetBalance) {
    balance -= amount;
  }
  cameraOn = true;
  return amount;
}

const amount = steal(balance, 1250);
console.log("범인, 당신은" + amount + "를 훔쳤습니다.!")
console.log(balance)