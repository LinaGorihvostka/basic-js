const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = [];
  let currentName = '';
  let formattedName = ''
  let firstLetter = '';
  if (Array.isArray(members)) {
    for (i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        currentName = members[i];
        formattedName = currentName.trim().toUpperCase().replace(' ', '');
        firstLetter = formattedName[0];
        dreamTeam.push(firstLetter);
      }
    }
    return dreamTeam.sort().join('');
  } else {
    return false;
  }
};
