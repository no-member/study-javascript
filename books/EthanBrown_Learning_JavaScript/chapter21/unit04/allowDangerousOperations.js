const cook = {
  name: "Walt",
  redPhosphorus: 100,
  water: 500,
};

const protecedCook = new Proxy(cook, {
  set(target, key, value) {
    if( key === 'redPhosphorus' ) {
      if(target.allowDangerousOperations) {
        return target.redPhosphorus = value;
      } else {
        return console.log("Too dangerous!");
      }
    }

    target[key] = value;
  },
});

protecedCook.water = 550;
console.log(cook);
console.log();

protecedCook.redPhosphorus = 150
console.log(cook);
console.log();

protecedCook.allowDangerousOperations = true;
console.log(cook);
console.log();

protecedCook.redPhosphorus = 150;
console.log(cook);
console.log();
