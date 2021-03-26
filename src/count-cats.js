const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = 0;
  for (i = 0; i < backyard.length; i++) {
    for (j = 0; j < backyard[i].length; j++) {
      if (backyard[i][j] == '^^') {
        cats++;
      }
    }
  }
  return cats;
};
