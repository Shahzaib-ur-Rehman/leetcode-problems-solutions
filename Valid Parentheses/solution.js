/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let parentheses = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let stack = [];
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (parentheses[element]) {
      stack.push(element);
    } else {
      if (stack.length === 0) return false; // Prevent popping from an empty stack
      let topElement = stack.pop();
      if (parentheses[topElement] !== element) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
};
// Test cases
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("()")); // true
console.log(isValid("([])")); // true
console.log(isValid("[")); // false (edge case)
console.log(isValid("({[)]}")); // false (edge case)
console.log(isValid("")); // true (valid empty input)