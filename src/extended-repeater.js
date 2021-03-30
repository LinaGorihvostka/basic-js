const CustomError = require("../extensions/custom-error");

module.exports = function repeater(string, opt) {
  string = String(string);
  let repeatedString = ''; // string is declared; all next elements will be concat like a strings
  let additionString = '';

  // some values we should compare with undefined,
  // cause way (!separator) will replace false bool values with empty strings
  // and way String(separator) will turn false bool values into 'false' srtings
  if (!opt.repeatTimes) opt.repeatTimes = 1; // default value
  if (opt.separator === undefined) opt.separator = '+'; // default value
  if (!opt.additionRepeatTimes) opt.additionRepeatTimes = 1; // default value
  if (opt.addition === undefined) opt.addition = ''; // if addition is not defined, it will be empty string
  if (opt.additionSeparator === undefined) opt.additionSeparator = '|'; // default value

  // get addition part at first
  for (i = 1; i <= opt.additionRepeatTimes; i++) {
    additionString += opt.addition;
    if (i < opt.additionRepeatTimes) {
      additionString += opt.additionSeparator; // if addition will be repeated, separate it
    }
  }

  // now get final string
   if (opt.repeatTimes > 1) { // if string will be repeated
    for (i = 1; i < opt.repeatTimes + 1; i++) {
      repeatedString += string;
      repeatedString += additionString;
      if (i < opt.repeatTimes) { // if we will repeating, split the lines
        repeatedString += opt.separator;
      }
    }
    return repeatedString;
  } else {
    return string + additionString; // once with 1 or empty addition
    }
};