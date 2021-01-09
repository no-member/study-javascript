let clunkCount = 0;

const display = function (output) {
  console.log(output)
  clunkCount += 1;
}

const clunk = function (times) {
  for (let i = 0; i < times; i++) {
    display("철컥!");
  }
}

const thingamajig = function (size) {
  if (size === 0) {
    display("찰칵")
  }

  if (size === 1) {
    display("쿵")
  }

  let facky = 1
  while (size > 1) {
    facky = facky * size;
    size = size - 1;
  }

  clunk(facky);
}

thingamajig(5);
console.log(clunkCount);

