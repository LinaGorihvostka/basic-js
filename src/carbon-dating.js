const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
	let currentAct = parseFloat(sample);
  let k = 0.693 / HALF_LIFE_PERIOD;
	if (typeof sample !== "string" || isNaN(currentAct) || currentAct <= 0 || currentAct > 15) {
		return false;
	} else {
		let log = Math.log(MODERN_ACTIVITY / currentAct);
		let age = Math.ceil(log / k);
		return age;
	}
};
