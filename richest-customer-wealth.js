var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    const nestedArray = accounts[i];
    let sum = 0;
    for (let j = 0; j < nestedArray.length; j++) {
      sum += nestedArray[j];
    }
    if (max < sum) {
      max = sum;
    }
  }
  return max;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],

  ])
);
