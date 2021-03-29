const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disk, speed) {
    let turnsPerSec = speed / 3600;
    let turns = (2 ** disk) - 1;
    let seconds = Math.floor(turns / turnsPerSec);
    return { turns, seconds };
};
