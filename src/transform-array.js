const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error();
  }
  if (!array.length) {
    return array;
  }
  let newArray = [];
  for (let i = 0; i < array.length; i++) {

    switch (array[i]) {
      case '--discard-next':
        if (array[i + 2] == '--discard-prev' ||
        array[i + 2] == '--double-prev') {
          i = i + 2;
        } else {
        i++;
        }
        break;
      case '--double-next':
        if (i != array.length - 1) {
          newArray.push(array[i + 1]);
        }
        break;
      case '--discard-prev':
        if (i != 0) {
          newArray.pop();
        }
        break;
      case '--double-prev':
        if (i != 0) {
          newArray.push(array[i - 1]);
        }
        break;
      default:
        newArray.push(array[i]);
        break;
    }
  }
  return newArray;
};