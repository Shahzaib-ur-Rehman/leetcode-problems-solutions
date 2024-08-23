var fizzBuzz = function (n) {
  let resultArray = [];
  for (let i = 1; i <= n; i++) {
    let isDivisibleBy3 = i % 3;
    let isDivisibleBy5 = i % 5;
    if (isDivisibleBy3 === 0 && isDivisibleBy5 === 0) {
      resultArray.push("FizzBuzz");
    } else if (isDivisibleBy3 === 0) {
      resultArray.push("Fizz");
    } else if (isDivisibleBy5 === 0) {
      resultArray.push("Buzz");
    } else {
      resultArray.push(i.toString());
    }
  }

  return resultArray;
};

console.log(fizzBuzz(15));
