/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let windowSum = 0; 
  for (let index = 0; index < k; index++) {
    windowSum += nums[index];
  }
  let maxAverage = windowSum / k;
  for (let index = 1; index <= nums.length - k; index++) {
    windowSum = windowSum - nums[index - 1] + nums[index + k - 1];
    maxAverage= Math.max(maxAverage, windowSum/k)
    
  }
  return maxAverage;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5
console.log(findMaxAverage([0, 1, 1, 3, 3], 4)); // 2
console.log(findMaxAverage([0, 4, 0, 3, 2], 1)); // 4
console.log(findMaxAverage([0, 4, 0, 3, 2], 2)); // 2
