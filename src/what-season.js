const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(dateSample) {
  if (!dateSample) {
    return 'Unable to determine the time of year!';
  } else if (dateSample instanceof Date && !isNaN(dateSample)) {
    let month = dateSample.getMonth() + 1; // 1 — 12
    switch (month) {
      case 12:
      case 1:
      case 2:
        return "winter";
        break;
      case 3:
      case 4:
      case 5:
        return "spring";
        break;
      case 6:
      case 7:
      case 8:
        return "summer";
        break;
      case 9:
      case 10:
      case 11:
        return "autumn";
        break;
    }
  } else {
    throw new Error();
  }
};
