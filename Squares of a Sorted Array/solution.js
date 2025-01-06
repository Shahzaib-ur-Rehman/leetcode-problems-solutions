var sortedSquares = function (nums) {
  let result = [];
  for (let index = 0; index < nums.length; index++) {
    const element = Math.abs(nums[index]);
    result.push(element * element);
  }

  result = result.sort((a, b) => a - b);
  return result
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
console.log(sortedSquares([-4,-1,0,3,10]));
