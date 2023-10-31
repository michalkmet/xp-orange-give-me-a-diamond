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
        // create line with *
        if (i <= levels) {
          for (let j = 1; j <= levels -1; j++) {
            result += ' ';
          }
          for (let l = 1; l <= levels + 1; l++) {
            result += '*';
          }
          result += '\n';
        } else if (i === levels + 1) {
          for (let m = 1; m <= inputNumber; m++) {
            result += '*';
          }
          result += '\n';
        } else {
          for (let n = 1; n <= levels -1 ; n++) {
            result += ' ';
          }
          for (let o = 1; o <= levels + 1; o++) {
            result += '*';
          }
          result += '\n';
        }
      }
    }
  }
  console.log('result: ');
  console.log(result);
  return result;
}
module.exports = diamond;
