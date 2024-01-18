'use strict';

function amount_even(collection) {

  //在这里写入代码
  let sum = collection.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);

    return sum;
}

module.exports = amount_even;
