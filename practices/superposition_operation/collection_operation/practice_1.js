'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let transformedCollection = collection.map(num => num * 3 + 2);

    let sum = transformedCollection.reduce((acc, num) => acc + num, 0);
    return sum;
}

module.exports = hybrid_operation;

