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
    console.log('levels: ', levels);
    for (let i = 1; i <= inputNumber; i++) {
      console.log('i: ', i);
      if (i === 1) { // first line
        for (let j = 1; j <= levels; j++) {
          result += ' ';
        }
        result += '*';
        result += '\n';
      } else if (i === inputNumber) { // last line
        for (let k = 1; k <= levels; k++) {
          result += ' ';
        }
        result += '*';
        result += '\n';
      } else { // between the first and last
        
        if (i % 2 != 0) {
          
        }
        
        for (let l = 1; l <= inputNumber; l++) {
          result += '*';
        }
        result += '\n';
      }

    }
  }
  console.log('result: ', result);
  return result;
}
module.exports = diamond;
