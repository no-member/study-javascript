const roomTestC = 21.5;
let currentTempC = 19.5;

const message = `The current template is ` + `${currentTempC - roomTestC}\u00b0C different than room temperature.`;
console.log(message);

const fahrenheit = `The current temperature is ${currentTempC * 9 / 5 + 32}\u00b0F`;
console.log(fahrenheit);
