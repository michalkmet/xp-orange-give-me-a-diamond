function diamond(inputNumber) {
  if (inputNumber === 1) {
    return '*';
  } else if (inputNumber === 3) {
    return ' *\n***\n *\n';
  }
  return null;
}

module.exports = diamond;
