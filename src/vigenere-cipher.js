const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direction) {
    if (direction === undefined) {
      this.direction = true;
    } else {
      this.direction = direction;
    }
  }

  encrypt(message, key) {
if (!message || !key) {
      throw new Error();
    }
    let clearText = message.toUpperCase();
    let password = key.toUpperCase();

    let newPasswordArray = [];
    let j = 0;
    // this loop generates new pass same length as message, array contains only letters and whitespaces
    for (let i = 0; i < clearText.length; i++) {
      if (clearText[i].charCodeAt() >= 65 && clearText[i].charCodeAt() <= 90) {
        newPasswordArray.push(password[j]);
        j++;
        if (j > password.length - 1) {
          j = 0;
        }
      }
      else {
        newPasswordArray.push(' ');
      }
    }
    let newPassword = newPasswordArray.join('');
    let cryptedWord = [];
    let midCharCode = 0;
    let cryptedCharCode = 0;
    let cryptedLetter = '';
    let cryptedDirectOrder;
    let cryptedReverseOrder;
    // this loop calculates distance from 'A'(65) to letter[i](?) for every letter in original message
    // and implement same shift to every letter of new long password.
    // how it works?
    // at first we have to find out distance from 'A'(65) to current letter of original message =>
    // imagine that the letter we want to encode is 'C' =>
    // than distance between letters is 2 (67 - 65 ASCII) =>
    // now we have to apply distance to each character of the password: char(ASCII + distance) =>
    // than, if our real letter 'C', and difference between letters is 2 (67 - 65 ASCII) =>
    // apply that distance to password letter 'O' to get fake letter 'Q' (79 ASCII + 2 = 81 ASCII)
    for (let i = 0; i < clearText.length; i++) {
      let shift = 0;
      // if char in message is A-Z, push encrypted char in new word array
      if (clearText[i].charCodeAt() >= 65 && clearText[i].charCodeAt() <= 90) {
        shift = clearText[i].charCodeAt() - 65;
        midCharCode = newPassword[i].charCodeAt() + shift;
        if (midCharCode > 90) {
          cryptedCharCode = midCharCode - 26;
        } else {
          cryptedCharCode = midCharCode;
        }
        cryptedLetter = String.fromCharCode(cryptedCharCode);
        cryptedWord.push(cryptedLetter);
      } else { // else push original char
        cryptedWord.push(clearText[i]);
      }
    }
    cryptedDirectOrder = cryptedWord.join('');
    cryptedReverseOrder = cryptedWord.reverse().join('');

    if (this.direction) {
      return cryptedDirectOrder;
    } else {
      return cryptedReverseOrder;
    }
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }
    let cryptedText = message.toUpperCase();
    let password = key.toUpperCase();

    let newPasswordArray = [];
    let j = 0;
    // this loop generates new pass same length as message, array contains only letters and whitespaces
    for (let i = 0; i < cryptedText.length; i++) {
      if (cryptedText[i].charCodeAt() >= 65 && cryptedText[i].charCodeAt() <= 90) {
        newPasswordArray.push(password[j]);
        j++;
        if (j > password.length - 1) {
          j = 0;
        }
      }
      else {
        newPasswordArray.push(' ');
      }
    }
    let newPassword = newPasswordArray.join('');

    let decryptedWord = [];
    let cryptedCharCode = 0;
    let midCharCode = 0;
    let decryptedCharCode = 0
    let decryptedLetter = '';
    let decryptedDirectOrder;
    let decryptedReverseOrder;
    // this loop calculates distance from A(65) to 'letter[i](?)' in crypted message
    // and implement same shift to every letter of new long password
    for (let i = 0; i < cryptedText.length; i++) {
      let shift = 0;
      if (cryptedText[i].charCodeAt() >= 65 && cryptedText[i].charCodeAt() <= 90) {
        cryptedCharCode = cryptedText[i].charCodeAt();
        shift = cryptedCharCode - newPassword[i].charCodeAt();
        midCharCode = newPassword[i].charCodeAt() + shift;
        if (shift < 0) {
        shift += 26;
        }
        decryptedCharCode = shift + 65;
        decryptedLetter = String.fromCharCode(decryptedCharCode);
        decryptedWord.push(decryptedLetter);
      } else {
        decryptedWord.push(cryptedText[i]);
      }
    }
      decryptedDirectOrder = decryptedWord.join('');
      decryptedReverseOrder = decryptedWord.reverse().join('');

      if (this.direction) {
        return decryptedDirectOrder;
      } else {
        return decryptedReverseOrder;
      }
  }

}

module.exports = VigenereCipheringMachine;