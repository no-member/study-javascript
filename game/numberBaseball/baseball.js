const execute = function (value) {
  if (value === 0) {
    return false
  }

  return !value
}

const genRandomNum = function () {
  return Math.random() * 10;
}

export {execute}

