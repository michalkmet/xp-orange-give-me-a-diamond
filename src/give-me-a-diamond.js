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
        result += drawLine(spacesLength, steps[i - 1]);
        spacesLength--;
      } else if (i === levels + 1) {
        result += drawLine(0, inputNumber);
        spacesLength = 1;
        steps = steps.reverse();
      } else {
        result += drawLine(spacesLength, steps[j]);
        spacesLength++;
        j++;
      }
    }
  }
  return result;
}

function drawLine(spacesLength, starsCount) {
  let str = '';
  str += ' '.repeat(spacesLength);
  str += '*'.repeat(starsCount);
  str += '\n';
  return str;
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
