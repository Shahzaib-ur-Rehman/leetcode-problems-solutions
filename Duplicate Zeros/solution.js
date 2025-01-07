/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
// var duplicateZeros = function(arr) {
//     let index=0;
//     while (index<=arr.length) {
//         if (arr[index]===0) {
//             arr.splice(index+1,0,0)
//             arr.pop();
//             index=index+2;
//         }else{
//             index++
//         }
//     }

//     console.log(arr)
// };

// console.log(duplicateZeros([1,0,2,3,0,4,5,0]))
// console.log(duplicateZeros([1,2,3,0,4,5,0]))
// console.log(duplicateZeros([1,2,3]))

//another way to solve this problam
//using new array

var duplicateZeros = function (arr) {
  let queue = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === 0) {
      queue.push(0);
      queue.push(0);
    } else {
      queue.push(element);
    }
    if (queue.length > arr.length) {
      queue.pop();
    }
  }
  for (let index = 0; index < arr.length; index++) {
    arr[index] = queue[index];
  }
};

// Test cases
duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]); // Output: [1, 0, 0, 2, 3, 0, 0, 4]
duplicateZeros([1, 2, 3, 0, 4, 5, 0]); // Output: [1, 2, 3, 0, 0, 4, 5]
duplicateZeros([1, 2, 3]); // Output: [1, 2, 3]
