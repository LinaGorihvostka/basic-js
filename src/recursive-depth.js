const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    let currentDepth = 1;
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        currentDepth += 1;
        calculateDepth(array[i]);
      }
    }
  return currentDepth;
  }
};
