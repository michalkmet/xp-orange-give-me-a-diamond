function diamond(inputNumber) {
  if (inputNumber < 1 || inputNumber % 2 === 0) {
    return null;
  } else {
    return createDiamond(inputNumber);
  }
}

function createDiamond(inputNumber) {
  let result;
  if (inputNumber === 1) {
    result = '*';
  } else {
    for (let i = 0; i < inputNumber; i++) {
      console.log('i: ', i);
    }
    result += ' ';
    result += '*';
    result += '\n';
    result += '***';
    result += '\n';
    result += ' ';
    result += '*';
    result += '\n';
  }
  return result;
}
module.exports = diamond;
