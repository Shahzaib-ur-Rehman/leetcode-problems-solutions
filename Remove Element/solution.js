/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   let first = 0;
//   let last = nums.length - 1;
//   let count = 0;
  
//   while (first < last) {
//     if (nums[first] === val) {
//       while (nums[first] === nums[last]) {
//         last--;
//       }
//       let temp = nums[first];
//       nums[first] = nums[last];
//       nums[last] = temp;
//       last--;
//       count++;
//     }
//     first++;
//   }
//   return nums.length - 1 - count;
// };
var removeElement = function (nums, val) {
    let index = 0; 
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[index] = nums[i];  
        index++;
      }
    }
  
    return nums;  
  };
  
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 2));
console.log(removeElement(["..."], "..."));
console.log(removeElement([2], 3));
