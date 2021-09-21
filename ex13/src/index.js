// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
console.log(randomRangeNumber(1, 22));
console.log(randomRangeNumber(3, 12));

// Only change code above this line

module.exports = randomRangeNumber;
