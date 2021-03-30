const CustomError = require("../extensions/custom-error");

const chainMaker = {
chain: [],

getLength() {
  return this.chain.length;
  },

addLink(value) {
  if (typeof value === 'undefined') value = '';
    this.chain.push(String(value) + '');
    return this;
  },

removeLink(position) {
  if (typeof position !== "number" || position > this.chain.length) {
      this.chain = [];
      throw new Error('Нет такой буквы в этом слове!');
    }
  this.chain.splice(position - 1, 1);
  return this;
  },

reverseChain() {
  this.chain.reverse();
  return this;
},

finishChain() {
  let finalChain = '( ' + this.chain.join(" \)~~\( ") + ' )';
  this.chain = [];
  return finalChain;
},
};

module.exports = chainMaker;
