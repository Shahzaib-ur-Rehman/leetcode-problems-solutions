/**
 * @param {number} n
 * @return {boolean}
 */

const getNext = (n) => {
  let totalSum = 0;
  while (n > 0) {
    let d = n % 10;
    n = Math.trunc(n / 10);
    totalSum += d * d;
  }
  return totalSum;
};
var isHappy = function (n) {
  if (n <= 0) return false;
  let slowRunner = n;
  let fastRunner = getNext(n);
  while (fastRunner !== 1 && slowRunner !== fastRunner) {
    slowRunner = getNext(slowRunner);
    fastRunner = getNext(getNext(fastRunner));
  }
  return fastRunner === 1;
};

// Test Cases
console.log(isHappy(145)); // false (enters a cycle)
console.log(isHappy(1));   // true (1 is always happy)
console.log(isHappy(19));  // true (19 -> 82 -> 68 -> 100 -> 1)
console.log(isHappy(0));   // false (edge case)
console.log(isHappy(-7));  // false (edge case)
