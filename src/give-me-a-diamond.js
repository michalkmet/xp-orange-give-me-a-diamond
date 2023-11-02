function diamond(inputNumber) {
  if (inputNumber < 1 || inputNumber % 2 === 0) {
    return null;
  } else {
    return createDiamond(inputNumber);
  }
}

function createDiamond(inputNumber) {
  let result = '';
  if (inputNumber === 1) {
    result = '*';
  } else {
    let levels = (inputNumber - 1) / 2;
    let spacesLength = levels;
    let steps = createSteps(inputNumber);
    let j = 0;
    for (let i = 1; i <= inputNumber; i++) {
      if (i <= levels) {
        result += ' '.repeat(spacesLength);
        result += '*'.repeat(steps[i - 1]);
        result += '\n';
        spacesLength--;
      } else if (i === levels + 1) {
        result += '*'.repeat(inputNumber);
        result += '\n';
        spacesLength = 1;
        steps = steps.reverse();
      } else {
        result += ' '.repeat(spacesLength);
        result += '*'.repeat(steps[j]);
        result += '\n';
        spacesLength++;
        j++;
      }
    }
  }
  return result;
}

function createSteps(inputNumber) {
  let steps = [];
  for (let i = 0; i < inputNumber; i++) {
    if (i % 2 != 0) {
      steps.push(i);
    }
  }
  return steps;
}

module.exports = diamond;
