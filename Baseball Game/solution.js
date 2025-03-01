/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let total = 0;
  if (operations.length === 0) return total;
  let stack = [];
  for (let index = 0; index < operations.length; index++) {
    const element = operations[index];
    if (element == "C") {
      if (stack.length !== 0) {
        stack.pop();
      }
    } else if (element == "D") {
      if (stack.length !== 0) {
        let newItem = parseInt(stack[stack.length - 1]) * 2;
        stack.push(newItem);
      }
    } else if (element == "+") {
      if (stack.length !== 0) {
        let newItem =
          parseInt(stack[stack.length - 1]) + parseInt(stack[stack.length - 2]);
        stack.push(newItem);
      }
    } else {
      stack.push(parseInt(element));
    }
  }
  for (let index = 0; index < stack.length; index++) {
    const element = parseInt(stack[index]);

    total += element;
  }
  return total;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1", "C"]));
