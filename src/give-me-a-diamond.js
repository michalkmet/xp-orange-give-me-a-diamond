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
    console.log('levels: ', levels);
    console.log('spacesLength: ', spacesLength);
    for (let i = 1; i <= inputNumber; i++) {
      let multiplicator = i % 2 === 0 ? i + 1 : i;
      console.log('i: ', i);
      if (i <= levels) { // first rows till middle row
        result += ' '.repeat(spacesLength);

        result += '*'.repeat(multiplicator);
        result += '\n';
        spacesLength--;
      } else if (i === levels + 1) { // middle row
        for (let m = 1; m <= inputNumber; m++) {
          result += '*';
        }
        result += '\n';
      } else { // after middle row
        for (let n = 1; n <= levels - 1 ; n++) {
          result += ' ';
        }
        for (let o = 1; o <= levels + 1; o++) {
          result += '*';
        }
        result += '\n';
      }
      
    }
  }
  console.log('result: ');
  console.log(result);
  return result;
}
module.exports = diamond;
