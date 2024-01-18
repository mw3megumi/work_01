'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let sum = collection
    .filter(num => num % 2 !== 0)
    .map(oddNum => oddNum * 3 + 5)
    .reduce((acc, num) => acc + num, 0);

  return sum;
}

module.exports = hybrid_operation_to_uneven;

