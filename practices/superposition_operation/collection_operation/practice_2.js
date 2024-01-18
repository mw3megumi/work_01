'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let result = collection.filter(num => num % 2 !== 0).map(oddNum => oddNum * 3 + 2);

  return result;
}

module.exports = hybrid_operation_to_uneven;

