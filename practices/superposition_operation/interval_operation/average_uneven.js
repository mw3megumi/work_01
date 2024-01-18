'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let oddNumbers = collection.filter(num => num % 2 !== 0);

  if (oddNumbers.length == 0) {
    return 0;
  }

  let sum = oddNumbers.reduce((acc, num) => acc + num, 0);
  let average = sum / oddNumbers.length;

  return average;
}

module.exports = average_uneven;
