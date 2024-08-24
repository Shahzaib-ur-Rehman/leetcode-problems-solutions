var middleNode = function (head) {
  let middle =Math.floor( head.length / 2);
  let result = head.splice(middle)
  return result
};

console.log(middleNode([1, 2, 3, 4, 5]));
console.log(middleNode([1,2,3,4,5,6]));
