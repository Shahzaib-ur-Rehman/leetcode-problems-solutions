var numberOfSteps = function (num) {
  let steps = 0;
  while (num !== 0) {
    let isEven = num % 2 === 0;
    if (isEven) {
      num = num / 2;
    }else{
        num=num-1;
    }
    steps++
  }
  return steps
};


console.log(numberOfSteps(14))
console.log(numberOfSteps(8))
console.log(numberOfSteps(123))