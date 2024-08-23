const runningSum = (nums) => {
  let newArray = [];
  const sumArray = (index) => {
    let sum = 0;
    if (index === 0) {
      sum = nums[index];
      return sum;
    } else {
        for (let x = 0; x <= index; x++) {
            const element = nums[x];
            sum+=element
        }
    }
    return sum
  };
  for (let index = 0; index < nums.length; index++) {
    let sum = sumArray(index);
    newArray.push(sum);
  }
  return newArray
};
 
console.log(runningSum([3,1,2,10,1]));
