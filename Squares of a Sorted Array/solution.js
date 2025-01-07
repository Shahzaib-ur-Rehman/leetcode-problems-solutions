var sortedSquares = function (nums) {
  let result = [];
  for (let index = 0; index < nums.length; index++) {
    const element = Math.abs(nums[index]);
    result.push(element * element);
  }

  result = result.sort((a, b) => a - b);
  return result;
};

// console.log(sortedSquares([-7, -3, 2, 3, 11]));
// console.log(sortedSquares([-4, -1, 0, 3, 10]));

//now using buble sort for sorting this array

const sortedSquaresUsingBubleSort = (nums) => {
  let result = [];
  for (let index = 0; index < nums.length; index++) {
    const element = Math.abs(nums[index]);
    result.push(element * element);
  }

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < result.length; i++) {
      if (result[i] > result[i + 1]) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return result;
};

console.log(sortedSquaresUsingBubleSort([-7, -3, 2, 3, 11]));
console.log(sortedSquaresUsingBubleSort([-4, -1, 0, 3, 10]));
