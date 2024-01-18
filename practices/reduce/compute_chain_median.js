'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let numbers = collection.split("->").map(Num => Number(Num))

  numbers.sort((a, b) => a - b);

  let length = numbers.length;
  if (length % 2 === 0) {
    return (numbers[length / 2 - 1] + numbers[length / 2]) / 2;
  } 
  else {
    return numbers[Math.floor(length / 2)];
  }
}

module.exports = compute_chain_median;
